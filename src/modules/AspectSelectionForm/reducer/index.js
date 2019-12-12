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
		case types.CHANNEL_SELECT_SUCCESS:
			return assoc("channelListData", action.value, state);

		case types.CATEGORY_SUCCESS:
			return assoc("categoryListData", action.value, state);

		case types.SET_CATEGORY_LIST_VISIBLE:
			return assocState("isChannelSelected");

		case types.SET_ASPECT_LIST_VISIBLE:
			return assocState("isCategorySelected");

		case types.GET_ASPECTS_SUCCESS:
			return assocState("aspectList");

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
