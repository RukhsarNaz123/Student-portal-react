import axios from "axios";
import { userConstants } from "./userConstants";

export const getUserData = (userId, role) => async (dispatch) => {
  try {
    var {
      data: {
        data: { user },
      },
    } = await axios.get(`/${role}/${userId}`);
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

export const addCourse = (courseDetails) => async () => {
  try {
    var { title, code, semester, teacherId, creditHours } = courseDetails;
    console.log(courseDetails);
    var course = await axios.post("/admin/addCourse", {
      title,
      code,
      semester,
      teacherId,
      creditHours,
    });
    console.log(course);
  } catch (error) {
    console.log(error);
  }
};
