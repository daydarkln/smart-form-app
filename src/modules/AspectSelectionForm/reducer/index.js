import { assoc, __, compose, uniqBy, prop, pathOr } from "ramda";

import types from "../types";

const initialState = {
	isChannelListLoading: false,
	isCategoryListLoading: false,
	isAspectListLoading: false,
	isChannelSelected: false,
	isCategorySelected: false
};

export default (state = initialState, action) => {
	const assocState = assoc(__, action.value, state);
	switch (action.type) {
		case types.CHANNEL_SELECT_LOADING:
			return assocState("isChannelListLoading");

		case types.CHANNEL_SELECT_SUCCESS:
			return compose(
				assoc("channelListData", action.value),
				assoc("isChannelSelected", true)
			)(state);

		case types.CHANNEL_SELECT_ERROR:
			return assocState("channelListError");

		case types.CATEGORY_LOADING:
			return assocState("isCategoryListLoading");

		case types.CATEGORY_SUCCESS:
			return compose(
				assoc("categoryListData", action.value),
				assoc("isChannelSelected", true)
			)(state);

		case types.CATEGORY_ERROR:
			return assocState("categoryError");

		case types.CUSTOM_CATEGORY_SUCCESS:
			const childrens = pathOr([], ["categoryListData", "childrens"], state);
			const result = compose(
				assoc("childrens", uniqBy(prop("next"), [...childrens, action.value])),
				pathOr({}, ["categoryListData"])
			)(state);

			return assoc("categoryListData", result, state);

		default:
			return state;
	}
};
