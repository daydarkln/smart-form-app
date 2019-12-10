import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./modules/Auth/reducer";

const createCoreReducer = history =>
	combineReducers({
		router: connectRouter(history),
		authReducer
	});

export default createCoreReducer;
