import * as type from "../actions/actionTypes";
import {updateObject} from "../../shared/utility";


const initialState = {
    totalLocations: '',
    distanceCovered: '',
    totalTrips: '',
    loading: false,
    error: null,
    recentRoutes: [],
    recentRoutesLoading: false,
    recentRoutesError: null,
    specificRoute: [],
    specificRouteLoading: false,
    specificRouteError: null
}

const setRecentRoutesLoading = (state, action) => {
    return updateObject(state, {recentRoutesLoading: action.value})
}
const setRecentRoutesSuccess = (state, action) => {
    return updateObject(state, {recentRoutes: action.recentRoutes, recentRoutesLoading: false})
}
const setRecentRoutesFail = (state, action) => {
    return updateObject(state, {recentRoutesError: action.error, recentRoutesLoading: false})
}

const fetchSpecificRouteLoading = (state, action) => {
    return updateObject(state, {specificRouteLoading: true})
}
const fetchSpecificRouteSuccess = (state, action) => {
    return updateObject(state, {specificRoute: action.payload.data, specificRouteLoading: false})
}
const fetchSpecificRouteFail = (state, action) => {
    return updateObject(state, {specificRouteError: action.error, specificRouteLoading: false})
}

export default function dashboardSummary(state = initialState, action) {
    switch (action.type) {
        case type.DASHBOARD_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.DASHBOARD_SUMMARY_SUCCESS:
            return {
                ...state,
                totalLocations: action.data.countLocations,
                distanceCovered: action.data.distanceCovered,
                totalTrips: action.data.totalTrips,
                loading: false
            }
        case type.DASHBOARD_SUMMARY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case type.START_FETCHING_RECENT_ROUTES:
            return setRecentRoutesLoading(state, action);
        case type.FETCH_RECENT_ROUTES_SUCCESS:
            return setRecentRoutesSuccess(state, action);
        case type.FETCH_RECENT_ROUTES_FAIL:
            return setRecentRoutesFail(state, action);
        case type.FETCH_SPECIFIC_ROUTE_REQUEST:
            return fetchSpecificRouteLoading(state, action);
        case type.FETCH_SPECIFIC_ROUTE_SUCCESS:
            return fetchSpecificRouteSuccess(state, action);
        case type.FETCH_SPECIFIC_ROUTE_FAIL:
            return fetchSpecificRouteFail(state, action);
        default:
            return state;
    }
}