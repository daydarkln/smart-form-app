const getTypeName = name => "@@authForm/" + name;

export default {
	AUTH_LOADING: getTypeName("AUTH_LOADING"),
	AUTH_SUCCESS: getTypeName("AUTH_SUCCESS"),
	AUTH_ERROR: getTypeName("AUTH_ERROR")
};
