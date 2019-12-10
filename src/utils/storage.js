import { preffix } from "../config";

const ls = window.localStorage;

const appStorage = {
	get: (name, defaultValue) => {
		const result = ls.getItem(name);

		return result ? result : defaultValue;
	},
	set: (name, value) => {
		ls.setItem(name, value);

		return true;
	},
	removeItem: name => {
		ls.removeItem(name);
	},
	clear: () => {
		ls.clear();

		return true;
	}
};

export default appStorage;
