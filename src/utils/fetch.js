import axios from "axios";
import { baseURL } from "../config";
import appStorage from "./storage";

export const fetch = axios.create({
	baseURL
});

export const authFetch = () => {
	const token = appStorage.get("/token");
	return axios.create({
		baseURL,
		headers: {
			Authorization: `bearer ${token}`
		}
	});
};
