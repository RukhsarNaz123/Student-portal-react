import { userConstants } from "./userConstants";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case userConstants.GET_USER_DETAILS:
      return { ...payload.user };
    case userConstants.REMOVE_USER_DETAILS:
      return {};
    default:
      return state;
  }
};

export default userReducer;
