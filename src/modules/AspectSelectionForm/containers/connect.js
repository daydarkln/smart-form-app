import { connect } from "react-redux";
import { pathOr } from "ramda";

import * as actions from "../actions";

const mapStateToProps = state => ({
	channelList: pathOr(
		[],
		["aspectFormReducer", "channelListData", "results"],
		state
	)
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps);
