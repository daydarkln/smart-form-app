import { withHandlers } from "recompose";

export default withHandlers({
	handleSelectChannel: props => value => {
		props.channelSelectAction(value);
	}
});
