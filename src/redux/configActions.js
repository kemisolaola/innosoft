import { getConfig } from "../api/getConfig";

export const FETCH_CONFIG_REQUEST = "FETCH_CONFIG_REQUEST";
export const FETCH_CONFIG_SUCCESS = "FETCH_CONFIG_SUCCESS";
export const FETCH_CONFIG_FAILURE = "FETCH_CONFIG_FAILURE";

export const fetchConfig = (appId) => async (dispatch) => {
  dispatch({ type: FETCH_CONFIG_REQUEST });

  try {
    const config = await getConfig(appId);
    dispatch({ type: FETCH_CONFIG_SUCCESS, payload: config });
  } catch (error) {
    dispatch({ type: FETCH_CONFIG_FAILURE, payload: error.message });
  }
};
const API_BASE_URL = "https://api-test.innoloft.com";


