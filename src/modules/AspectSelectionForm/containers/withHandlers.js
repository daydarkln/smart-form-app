import { withHandlers } from "recompose";

export default withHandlers({
	handleSelectChannel: props => value => {
		props.channelSelectAction(value);
	},
	handleSelectParent: props => (id, level) => {
		props.selectParentAction(id, level);
	},
	handleSelectCategory: props => id => {
		props.selectCategoryAction(id);
	}
});
