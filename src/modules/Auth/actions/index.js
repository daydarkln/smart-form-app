import types from "../types";
import { fetch } from "../../../utils/fetch";
import appStorage from "../../../utils/storage";
import { message } from "antd";

export const authLoading = bool => ({
	type: types.AUTH_LOADING,
	bool
});

export const authSuccess = tokens => ({
	type: types.AUTH_SUCCESS,
	tokens
});

export const authError = error => ({
	type: types.AUTH_ERROR,
	error
});

export const authAction = values => async dispatch => {
	dispatch(authLoading(true));
	try {
		const res = await fetch.post("auth/jwt/create", values);
		const tokens = res.data;

		appStorage.set("tokens/access", tokens.access);
		appStorage.set("tokens/refresh", tokens.refresh);

		dispatch(authSuccess(tokens));
	} catch (e) {
		message.error("Пользователь не найден");
		dispatch(authError(e));
	} finally {
		dispatch(authLoading(false));
	}
};
