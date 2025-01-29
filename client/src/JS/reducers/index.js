import { combineReducers } from "redux";
import authReducer from "./authreducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ authReducer, userReducer });

export default rootReducer;
