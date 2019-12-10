import axios from "axios";
import config from "../config";
import appStorage from "./storage";

export const fetch = axios.create({
	baseURL: config.baseURL
});

export const authFetch = () => {
	const token = appStorage.get("/token");
	return axios.create({
		baseURL: config.baseURL,
		headers: {
			Authorization: `bearer ${token}`
		}
	});
};
