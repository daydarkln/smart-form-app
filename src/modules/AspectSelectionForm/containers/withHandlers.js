import { withHandlers } from "recompose";
import { takeLast } from "ramda";

export default withHandlers({
	handleSelectChannel: props => value => {
		props.channelSelectAction(value);
	},
	handleSelectParent: props => (id, level) => {
		props.selectParentAction(id, level);
	},
	handleSelectCategory: props => value => {
		const current = takeLast(1, value)[0];
		const [category_id, level, isLeaf, id] = current.split(",");
		if (isLeaf === "true") {
			props.getAspectsAction(id);
		} else {
			props.selectCategoryAction(category_id, level);
		}
	}
});
