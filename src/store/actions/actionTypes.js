// Map action types.
export const ADD_START_POINT = 'ADD_START_POINT';
export const SET_START_POINT = 'SET_START_POINT';
export const SET_CURRENT_USER_LOCATION = 'SET_CURRENT_USER_LOCATION';
export const ADD_BLANK_WAY_POINT = 'ADD_BLANK_WAY_POINT';
export const ADD_WAY_POINT = 'ADD_WAY_POINT';
export const UPDATE_WAY_POINT = 'UPDATE_WAY_POINT';
export const REMOVE_WAY_POINT = 'REMOVE_WAY_POINT';
export const PREPARE_DIRECTION_SERVICE_OPTIONS = 'PREPARE_DIRECTION_SERVICE_OPTIONS';
export const FETCH_CURRENT_USER_LOCATION = 'FETCH_CURRENT_USER_LOCATION';
export const SET_IS_OPTIMIZED = 'SET_IS_OPTIMIZED';
export const RESET_MAP = 'RESET_MAP';

// SideContent action types.
export const FETCH_PLACE_ID = 'FETCH_PLACE_ID';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const SET_WAY_POINT = 'SET_WAY_POINT'; // side content - adding a location from form with reference
export const SET_REFERENCE = 'SET_REFERENCE'; // side content - adding a reference from form
export const SET_ADDRESS = 'SET_ADDRESS';
export const RESET_FORM = 'RESET_FORM';
export const WAY_POINT_FROM_SUBMIT = 'WAY_POINT_FROM_SUBMIT';

// Home action types.
export const SET_SIDE_PANEL_OPEN = 'SET_SIDE_PANEL_OPEN';
export const SET_LOGIN_MODAL_OPEN = 'SET_LOGIN_MODAL_OPEN';

// Driver action types.
export const SEND_DRIVER_DETAILS = 'SEND_DRIVER_DETAILS';
export const SEND_DRIVER_DETAILS_SUCCESS = 'SEND_DRIVER_DETAILS_SUCCESS';
export const SEND_DRIVER_DETAILS_FAILURE = 'SEND_DRIVER_DETAILS_FAILURE';
export const CLEAR_DRIVER_STATE = 'CLEAR_DRIVER_STATE';
export const CLEAR_DRIVER_STATE_SUCCESS = 'CLEAR_DRIVER_STATE_SUCCESS';
export const CLEAR_DRIVER_STATE_FAILURE = 'CLEAR_DRIVER_STATE_FAILURE';

// Auth action types.
export const AUTH_USER = 'AUTH_USER';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_INITIATE_LOGOUT = 'AUTH_INITIATE_LOGOUT';
