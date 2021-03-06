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
export const SET_CURRENT_DIRECTION = 'SET_CURRENT_DIRECTION';
export const PREPARE_WAYPOINT_TRAVERSAL_ORDER = 'PREPARE_WAYPOINT_TRAVERSAL_ORDER';
export const SET_LOADING = 'SET_LOAD';

// SideContent action types.
export const FETCH_PLACE_ID = 'FETCH_PLACE_ID';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const SET_WAY_POINT = 'SET_WAY_POINT'; // side content - adding a location from form with reference
export const SET_REFERENCE = 'SET_REFERENCE'; // side content - adding a reference from form
export const SET_ADDRESS = 'SET_ADDRESS';
export const RESET_FORM = 'RESET_FORM';
export const WAY_POINT_FROM_SUBMIT = 'WAY_POINT_FROM_SUBMIT';
export const PREPARE_SHORT_URLS =  'PREPARE_SHORT_URLS';
export const PREPARE_SHORT_URLS_SUCCESS =  'PREPARE_SHORT_URLS_SUCCESS';
export const PREPARE_SHORT_URLS_FAILURE =  'PREPARE_SHORT_URLS_FAILURE';

// Home action types.
export const SET_SIDE_PANEL_OPEN = 'SET_SIDE_PANEL_OPEN';
export const SET_LOGIN_MODAL_OPEN = 'SET_LOGIN_MODAL_OPEN';
export const SAVE_API_CONSUMPTION_USAGE = 'SAVE_API_CONSUMPTION_USAGE';
export const SAVE_OPTIMIZED_ROUTE = 'SAVE_OPTIMIZED_ROUTE';

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

// Dashboard summary action types
export const DASHBOARD_SUMMARY_REQUEST = "DASHBOARD_SUMMARY_REQUEST";
export const DASHBOARD_SUMMARY_SUCCESS = "DASHBOARD_SUMMARY_SUCCESS";
export const DASHBOARD_SUMMARY_FAILURE = "DASHBOARD_SUMMARY_FAILURE";
export const FETCH_RECENT_ROUTES = "FETCH_RECENT_ROUTES";
export const START_FETCHING_RECENT_ROUTES = "START_FETCHING_RECENT_ROUTES";
export const FETCH_RECENT_ROUTES_SUCCESS = "FETCH_RECENT_ROUTES_SUCCESS";
export const FETCH_RECENT_ROUTES_FAIL = "FETCH_RECENT_ROUTES_FAIL";
export const FETCH_SPECIFIC_ROUTE_REQUEST = "FETCH_SPECIFIC_ROUTE_REQUEST";
export const FETCH_SPECIFIC_ROUTE_SUCCESS = "FETCH_SPECIFIC_ROUTE_SUCCESS";
export const FETCH_SPECIFIC_ROUTE_FAIL = "FETCH_SPECIFIC_ROUTE_FAIL";
export const FETCH_WEEKLY_SUMMARY_REQUEST = "FETCH_WEEKLY_SUMMARY_REQUEST";
export const FETCH_WEEKLY_SUMMARY_SUCCESS = "FETCH_WEEKLY_SUMMARY_SUCCESS";
export const FETCH_WEEKLY_SUMMARY_FAIL = "FETCH_WEEKLY_SUMMARY_FAIL";

// Travel log action types
export const TRAVEL_LOG_REQUEST = "TRAVEL_LOG_REQUEST";
export const TRAVEL_LOG_SUCCESS = "TRAVEL_LOG_SUCCESS";
export const TRAVEL_LOG_FAILURE = "TRAVEL_LOG_FAILURE";

// Dashboard settings action types
export const FETCH_AGGREGATED_QUOTA = "FETCH_AGGREGATED_QUOTA";
export const START_FETCHING_AGGREGATED_QUOTA = "START_FETCHING_AGGREGATED_QUOTA";
export const AGGREGATED_QUOTA_FETCH_SUCCESS = "AGGREGATED_QUOTA_FETCH_SUCCESS";
export const AGGREGATED_QUOTA_FETCH_FAIL = "AGGREGATED_QUOTA_FETCH_FAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const START_CHANGE_PASSWORD = "START_CHANGE_PASSWORD";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";

