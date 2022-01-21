import axios from "axios";
import { userConstants } from "../user/userConstants";
import { authConstants } from "./authConstants";

export const signup =
  ({ firstName, lastName, username, email, password, confirmPassword, role }) =>
  async (dispatch) => {
    try {
      var {
        data: {
          data: { profile },
        },
      } = await axios.post(`/auth/signup`, {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        role,
      });

      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user: profile,
        },
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      var {
        data: { data: { userProfile } = {} },
      } = await axios.post(`/auth/login`, { email, password });
      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user: userProfile,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const authLogout = () => async (dispatch) => {
  dispatch({
    type: authConstants.REMOVE_USER,
  });
};
