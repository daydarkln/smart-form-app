import { lifecycle } from "recompose";
import appStorage from "../../../utils/storage";

export default lifecycle({
	componentDidMount() {
		const hasToken = appStorage.get("tokens/access", false);
		if (hasToken) {
			this.props.history.push("/form");
		}
	}
});
