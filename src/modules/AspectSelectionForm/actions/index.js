import types from "../types";
import { withTryCatch } from "../../../utils/helpers";

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
	withTryCatch({
		dispatch,
		url: `v1/ebay/product/category/${id}/aspect/?limit=9999&aspectEnabledForVariations=&itemToAspectCardinality=&aspectRequired=`,
		method: "get",
		actionSuccess: getAspectsSuccess,
		textLoading: "загрузка аспектов...",
		textFailure: "Ошибка при получении списка аспектов"
	});
};

export const selectCategoryAction = (id, level) => async dispatch => {
	withTryCatch({
		dispatch,
		url: `v1/ebay/product/category/?level=${+level +
			1}&domain_id=&parent_id=${id}&is_leaf=&category_id=&variations_supported=`,
		method: "get",
		actionSuccess: customCategorySelectionSuccess,
		textLoading: "загрузка подкатегорий...",
		textFailure: "Ошибка при получении списка подкатегорий"
	});
};

export const channelSelectAction = value => async dispatch => {
	withTryCatch({
		dispatch,
		url: `v1/ebay/product/category/?level=1&domain_id=${value}&parent_id=&is_leaf=&category_id=&variations_supported=`,
		method: "get",
		actionSuccess: categorySelectionSuccess,
		textLoading: "загрузка категорий...",
		textFailure: "Ошибка при получении списка категорий"
	});
};

export const getChannelAction = () => async dispatch => {
	withTryCatch({
		dispatch,
		url: "v1/marketplace/channel/",
		method: "get",
		actionSuccess: channelSelectionSuccess,
		textLoading: "загрузка каналов...",
		textFailure: "Ошибка при получении списка каналов"
	});
};
