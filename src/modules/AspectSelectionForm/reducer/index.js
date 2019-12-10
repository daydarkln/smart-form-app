import { assoc, __ } from "ramda";

import types from "../types";

const initialState = {
	isChannelListLoading: false
};

export default (state = initialState, action) => {
	const assocState = assoc(__, action.value, state);
	switch (action.type) {
		case types.CHANNEL_SELECT_LOADING:
			return assocState("isChannelListLoading");
		case types.CHANNEL_SELECT_SUCCESS:
			return assocState("channelListData");
		case types.CHANNEL_SELECT_ERROR:
			return assocState("channelListError");

		default:
			return state;
	}
};
