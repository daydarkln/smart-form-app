import { message } from "antd";
import appStorage from "./storage";
import { authFetch } from "./fetch";

export const withTryCatch = async ({
	dispatch,
	url,
	method,
	actionSuccess,
	textLoading,
	textFailure
}) => {
	const loading = message.loading(textLoading);
	try {
		const res = await authFetch(method, url);

		const data = res.data;
		dispatch(actionSuccess(data));
	} catch ({ response }) {
		if (response.status >= 400) {
			appStorage.removeItem("tokens/refresh");
			appStorage.removeItem("tokens/access");
			window.location.pathname = "/auth";
		}
		message.error(textFailure);
	} finally {
		loading();
	}
};
