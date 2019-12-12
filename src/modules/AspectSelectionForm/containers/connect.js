import { connect } from "react-redux";
import * as selectors from "../selectors";

import * as actions from "../actions";

const mapStateToProps = state => ({
	channelList: selectors.getChannelList(state),
	categoryList: selectors.getCategoryList(state),
	aspectList: selectors.getAspectList(state),
	isChannelSelected: selectors.getIsChannelSelected(state),
	isCategorySelected: selectors.getIsCategorySelected(state)
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps);
