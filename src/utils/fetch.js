import axios from "axios";
import { pathOr } from "ramda";

import config from "../config";
import appStorage from "./storage";

export const fetch = axios.create({
	baseURL: config.baseURL
});

const verifyToken = async refresh => {
	const res = await fetch.post(
		"auth/jwt/verify",
		{ token: refresh },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
	const data = res.data;

	return pathOr("", ["code"], data);
};

const refreshToken = async refresh => {
	const res = await fetch.post(
		"auth/jwt/refresh",
		{ refresh },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);

	const access = pathOr("", ["data", "access"], res);

	appStorage.set("tokens/access", access);

	return access;
};

export const authFetch = async (method, url, data) => {
	const refresh = appStorage.get("tokens/refresh");

	const result = await verifyToken(refresh);
	const isTokenValid = result !== "token_not_valid";

	const newAccessToken = async () => await refreshToken(refresh);

	const access = isTokenValid
		? appStorage.get("tokens/access")
		: await newAccessToken();

	fetch.defaults.headers.common["Authorization"] = `JWT ${access}`;

	return fetch[method](url, data);
};
