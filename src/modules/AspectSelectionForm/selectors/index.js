import { pathOr, assoc, take, compose, find, propOr } from "ramda";

export const getChannelList = state =>
	pathOr([], ["aspectFormReducer", "channelListData", "results"], state);

export const getAspectList = state =>
	pathOr([], ["aspectFormReducer", "aspectList", "results"], state);

export const getIsChannelSelected = state =>
	pathOr(false, ["aspectFormReducer", "isChannelSelected"], state);

export const getIsCategorySelected = state =>
	pathOr(false, ["aspectFormReducer", "isCategorySelected"], state);

export const getCategoryList = state => {
	const list = pathOr(
		[],
		["aspectFormReducer", "categoryListData", "results"],
		state
	);

	const formated = list.map(function formatItem(item) {
		const initial = {
			value: [item.category_id, item.level, item.is_leaf, item.id].join(","),
			label: item.name,
			isLeaf: item.is_leaf
		};

		const getTrueLevel = child => {
			const childInstance = propOr([], "results")(child)[0];
			return (
				propOr(0, "level", childInstance) === propOr(0, "level", item) + 1 &&
				propOr(0, "parent_id", childInstance) === propOr(0, "category_id", item)
			);
		};

		const children = compose(
			find(child => getTrueLevel(child)),
			pathOr([], ["aspectFormReducer", "categoryListData", "childrens"])
		)(state);

		const childrenList = propOr([], "results", children);

		return item.is_leaf
			? initial
			: assoc(
					"children",
					childrenList.map(subitem => {
						return formatItem(subitem);
					}),
					initial
			  );
	});

	return formated;
};
