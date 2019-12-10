import config from "../config";

const ls = window.localStorage;

const getName = name => config.preffix + name;

const appStorage = {
	get: (name, defaultValue) => {
		const result = ls.getItem(getName(name));

		return result ? result : defaultValue;
	},
	set: (name, value) => {
		ls.setItem(getName(name), value);

		return true;
	},
	removeItem: name => {
		ls.removeItem(getName(name));
	},
	clear: () => {
		ls.clear();

		return true;
	}
};

export default appStorage;
