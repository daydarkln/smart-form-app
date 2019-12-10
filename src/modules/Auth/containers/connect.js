import { connect } from "react-redux";
import { pathOr } from "ramda";

import * as actions from "../actions";

const mapStateToProps = state => ({
	isAuthLoading: pathOr(false, ["authReducer", "isAuthLoading"], state)
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps);
