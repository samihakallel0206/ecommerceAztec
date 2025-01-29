import { combineReducers } from "redux";
import authReducer from "./authreducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  productReducer,
});

export default rootReducer;
