import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import createRootReducer from "../rootReducer";

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export const history = require("history").createBrowserHistory();

const rootReducer = createRootReducer(history);

export default function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState, middlewares);

	return store;
}
