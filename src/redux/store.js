import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import baseReducer from "./baseReducer";
import userReducer from "./userReducer";

const store = createStore(
  combineReducers({ base: baseReducer, user: userReducer }),
  applyMiddleware(thunk)
);

export default store;
