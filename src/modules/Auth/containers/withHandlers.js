import { withHandlers } from "recompose";

export default withHandlers({
	handleAuthSubmit: props => event => {
		event.preventDefault();
		const values = {
			email: event.target[0].value,
			password: event.target[1].value
		};
		props.authAction(values);
	}
});
