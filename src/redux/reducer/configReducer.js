import {
    FETCH_CONFIG_REQUEST,
    FETCH_CONFIG_SUCCESS,
    FETCH_CONFIG_FAILURE,
  } from "../actions/configActions";
  
  const initialState = {
    loading: false,
    config: null,
    error: null,
  };
  
  export const configReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONFIG_REQUEST:
        return { ...state, loading: true };
      case FETCH_CONFIG_SUCCESS:
        return { ...state, loading: false, config: action.payload, error: null };
      case FETCH_CONFIG_FAILURE:
        return { ...state, loading: false, config: null, error: action.payload };
      default:
        return state;
    }
  };
  