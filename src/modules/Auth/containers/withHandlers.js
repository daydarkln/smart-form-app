import { withHandlers } from "recompose";

export default withHandlers({
	handleAuthSubmit: props => async event => {
		event.preventDefault();
		const values = {
			email: event.target[0].value,
			password: event.target[1].value
		};
		await props.authAction(values);
		props.history.push("/form");
	}
});
