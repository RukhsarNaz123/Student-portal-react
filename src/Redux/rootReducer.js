import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
};
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
