import axios from "axios";
import { userConstants } from "./userConstants";

export const getUserData = (userId, role) => async (dispatch) => {
  try {
    var {
      data: {
        data: { user },
      },
    } = await axios.get(`/${role}/${userId}`);
    console.log(user);
    dispatch({
      type: userConstants.GET_USER_DETAILS,
      payload: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const clearUser = () => async (dispatch) => {
  dispatch({
    type: userConstants.REMOVE_USER_DETAILS,
  });
};
