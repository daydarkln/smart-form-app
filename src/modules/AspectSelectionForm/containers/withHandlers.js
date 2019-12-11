import { withHandlers } from "recompose";
import { takeLast } from "ramda";

export default withHandlers({
	handleSelectChannel: props => value => {
		props.channelSelectAction(value);
	},
	handleSelectParent: props => (id, level) => {
		props.selectParentAction(id, level);
	},
	handleSelectCategory: props => id => {
		debugger;
		props.selectCategoryAction(takeLast(1, id));
	}
});
