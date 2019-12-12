import types from "../types";
import { authFetch } from "../../../utils/fetch";
import { message } from "antd";

export const channelSelectionLoading = value => ({
	type: types.CHANNEL_SELECT_LOADING,
	value
});

export const categorySelectionLoading = value => ({
	type: types.CATEGORY_LOADING,
	value
});

export const channelSelectionSuccess = value => ({
	type: types.CHANNEL_SELECT_SUCCESS,
	value
});

export const channelSelectionError = value => ({
	type: types.CHANNEL_SELECT_ERROR,
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

export const categorySelectionError = value => ({
	type: types.CATEGORY_ERROR,
	value
});

export const getAspectsSuccess = value => ({
	type: types.GET_ASPECTS_SUCCESS,
	value
});

export const getAspectsError = value => ({
	type: types.GET_ASPECTS_ERROR,
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
	} catch (e) {
		message.error("Ошибка при получении списка аспектов");
		dispatch(getAspectsError(e));
	} finally {
		loading();
	}
};

export const selectCategoryAction = (id, level) => async dispatch => {
	dispatch(categorySelectionLoading(true));
	try {
		const res = await authFetch(
			"get",
			`v1/ebay/product/category/?level=${+level +
				1}&domain_id=&parent_id=${id}&is_leaf=&category_id=&variations_supported=`
		);

		const data = res.data;

		dispatch(customCategorySelectionSuccess(data));
	} catch (e) {
		message.error("Ошибка при получении списка категорий");
		dispatch(categorySelectionError(e));
	} finally {
		dispatch(categorySelectionLoading(false));
	}
};

export const channelSelectAction = value => async dispatch => {
	dispatch(categorySelectionLoading(true));
	try {
		const res = await authFetch(
			"get",
			`v1/ebay/product/category/?level=1&domain_id=${value}&parent_id=&is_leaf=&category_id=&variations_supported=`
		);

		const data = res.data;

		dispatch(categorySelectionSuccess(data));
		dispatch(setCategoryListVisible(true));
	} catch (e) {
		message.error("Ошибка при получении списка категорий");
		dispatch(categorySelectionError(e));
	} finally {
		dispatch(categorySelectionLoading(false));
	}
};

export const getChannelAction = () => async dispatch => {
	dispatch(channelSelectionLoading(true));
	try {
		const res = await authFetch("get", "v1/marketplace/channel/");

		const data = res.data;

		dispatch(channelSelectionSuccess(data));
	} catch (e) {
		message.error("Ошибка при получении списка каналов");
		dispatch(channelSelectionError(e));
	} finally {
		dispatch(channelSelectionLoading(false));
	}
};
