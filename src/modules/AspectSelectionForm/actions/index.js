import types from "../types";
import { authFetch } from "../../../utils/fetch";
import { message } from "antd";
import appStorage from "../../../utils/storage";
import { push } from "connected-react-router";

export const channelSelectionSuccess = value => ({
	type: types.CHANNEL_SELECT_SUCCESS,
	value
});

export const categorySelectionSuccess = value => ({
	type: types.CATEGORY_SUCCESS,
	value
});

export const customCategorySelectionSuccess = value => ({
	type: types.CUSTOM_CATEGORY_SUCCESS,
	value
});

export const getAspectsSuccess = value => ({
	type: types.GET_ASPECTS_SUCCESS,
	value
});

export const setCategoryListVisible = value => ({
	type: types.SET_CATEGORY_LIST_VISIBLE,
	value
});

export const setAspectListVisible = value => ({
	type: types.SET_ASPECT_LIST_VISIBLE,
	value
});

export const getAspectsAction = id => async dispatch => {
	const loading = message.loading("загрузка аспектов...");
	try {
		const res = await authFetch(
			"get",
			`v1/ebay/product/category/${id}/aspect/?limit=9999&aspectEnabledForVariations=&itemToAspectCardinality=&aspectRequired=`
		);

		const data = res.data;

		dispatch(getAspectsSuccess(data));
		dispatch(setAspectListVisible(true));
	} catch ({ response }) {
		if (response.status >= 400) {
			appStorage.removeItem("tokens/refresh");
			appStorage.removeItem("tokens/access");
			window.location.pathname = "/auth";
		}
		message.error("Ошибка при получении списка аспектов");
	} finally {
		loading();
	}
};

export const selectCategoryAction = (id, level) => async dispatch => {
	const loading = message.loading("загрузка подкатегорий...");
	try {
		const res = await authFetch(
			"get",
			`v1/ebay/product/category/?level=${+level +
				1}&domain_id=&parent_id=${id}&is_leaf=&category_id=&variations_supported=`
		);

		const data = res.data;

		dispatch(customCategorySelectionSuccess(data));
	} catch ({ response }) {
		if (response.status >= 400) {
			appStorage.removeItem("tokens/refresh");
			appStorage.removeItem("tokens/access");
			window.location.pathname = "/auth";
		}
		message.error("Ошибка при получении списка категорий");
	} finally {
		loading();
	}
};

export const channelSelectAction = value => async dispatch => {
	const loading = message.loading("загрузка категорий...");
	try {
		const res = await authFetch(
			"get",
			`v1/ebay/product/category/?level=1&domain_id=${value}&parent_id=&is_leaf=&category_id=&variations_supported=`
		);

		const data = res.data;

		dispatch(categorySelectionSuccess(data));
		dispatch(setCategoryListVisible(true));
	} catch ({ response }) {
		if (response.status >= 400) {
			appStorage.removeItem("tokens/refresh");
			appStorage.removeItem("tokens/access");
			window.location.pathname = "/auth";
		}
		message.error("Ошибка при получении списка категорий");
	} finally {
		loading();
	}
};

export const getChannelAction = () => async dispatch => {
	const loading = message.loading("загрузка каналов...");
	try {
		const res = await authFetch("get", "v1/marketplace/channel/");

		const data = res.data;

		dispatch(channelSelectionSuccess(data));
	} catch ({ response }) {
		if (response.status >= 400) {
			appStorage.removeItem("tokens/refresh");
			appStorage.removeItem("tokens/access");
			window.location.pathname = "/auth";
		}
		message.error("Ошибка при получении списка каналов");
	} finally {
		loading();
	}
};
