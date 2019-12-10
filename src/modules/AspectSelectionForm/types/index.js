const getTypeName = name => "@@aspectSelectionForm/" + name;

export default {
	CHANNEL_SELECT_LOADING: getTypeName("CHANNEL_SELECT_LOADING"),
	CHANNEL_SELECT_SUCCESS: getTypeName("CHANNEL_SELECT_SUCCESS"),
	CHANNEL_SELECT_ERROR: getTypeName("CHANNEL_SELECT_ERROR")
};
