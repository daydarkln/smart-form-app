import React from "react";
import { pathOr, assoc } from "ramda";

export const getChannelList = state =>
	pathOr([], ["aspectFormReducer", "channelListData", "results"], state);

export const getIsChannelSelected = state =>
	pathOr(false, ["aspectFormReducer", "isChannelSelected"], state);

export const getCategoryList = state => {
	const list = pathOr(
		[],
		["aspectFormReducer", "categoryListData", "results"],
		state
	);

	const formated = list.map(function formatItem(item) {
		const initial = {
			value: item.category_id,
			label: item.name
		};

		const children = pathOr([], ["children"], item);

		return item.is_leaf
			? initial
			: assoc(
					"children",
					children.map(subitem => formatItem(subitem)),
					initial
			  );
	});

	debugger;

	return formated;
};
