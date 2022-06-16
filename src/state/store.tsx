import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import jobsReducer from "./reducer";

const rootReducer = combineReducers({ jobsReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));

