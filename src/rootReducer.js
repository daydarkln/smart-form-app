import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./modules/Auth/reducer";
import aspectFormReducer from "./modules/AspectSelectionForm/reducer";

const createCoreReducer = history =>
	combineReducers({
		router: connectRouter(history),
		authReducer,
		aspectFormReducer
	});

export default createCoreReducer;
