import types from "../types";
import { authFetch } from "../../../utils/fetch";
import { message } from "antd";

export const channelSelectionLoading = value => ({
	type: types.CHANNEL_SELECT_LOADING,
	value
});

export const channelSelectionSuccess = value => ({
	type: types.CHANNEL_SELECT_SUCCESS,
	value
});

export const channelSelectionError = value => ({
	type: types.CHANNEL_SELECT_ERROR,
	value
});

export const channelSelectAction = value => ({
	type: types.CHANNEL_SELECT_ACTION,
	value
});

export const getChannelAction = () => async dispatch => {
	dispatch(channelSelectionLoading(true));
	try {
		const res = await authFetch("get", "v1/marketplace/channel/");

		const data = res.data;

		dispatch(channelSelectionSuccess(data));
	} catch (e) {
		message.error("Ошибка при получении списка каналов");
		dispatch(channelSelectionError(e));
	} finally {
		dispatch(channelSelectionLoading(false));
	}
};
