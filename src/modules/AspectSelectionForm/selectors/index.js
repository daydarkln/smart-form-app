import { pathOr, assoc, filter, compose, find, propOr } from "ramda";

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
			value: [item.category_id, item.level, item.id].join(","),
			label: item.name
		};

		debugger;

		const getTrueLevel = child => {
			const results = pathOr([], ["results"], child);
			const parentId = pathOr(
				"",
				["parent_id"],
				results.find(subitem => subitem.parent_id === item.category_id)
			);

			return parentId === item.category_id;
		};

		const children = compose(
			propOr([], "results"),
			find(getTrueLevel),
			pathOr([], ["aspectFormReducer", "categoryListData", "childrens"])
		)(state);

		return item.is_leaf
			? initial
			: assoc(
					"children",
					children.map(subitem => {
						debugger;
						return formatItem(subitem);
					}),
					initial
			  );
	});

	return formated;
};
