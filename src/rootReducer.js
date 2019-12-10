import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createCoreReducer = history =>
	combineReducers({
		router: connectRouter(history)
	});

export default createCoreReducer;
