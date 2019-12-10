import types from "../types";
import { assoc } from "ramda";

const initialState = {
	isAuthLoading: false,
	tokens: undefined,
	error: undefined
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.AUTH_LOADING:
			return assoc("isAuthLoading", action.bool, state);
		case types.AUTH_SUCCESS:
			return assoc("tokens", action.tokens, state);
		case types.AUTH_ERROR:
			return assoc("error", action.error, state);

		default:
			return state;
	}
};
