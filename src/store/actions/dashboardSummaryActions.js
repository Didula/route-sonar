import * as actionTypes from '../actions/actionTypes'

export const dashboardSummaryRequest = (customerID, startDate, endDate) => {
    return {
        type: actionTypes.DASHBOARD_SUMMARY_REQUEST,
        customerID: customerID,
        startDate: startDate,
        endDate: endDate
    }
}

export const dashboardSummarySuccess = (response) => {
    return {
        type: actionTypes.DASHBOARD_SUMMARY_SUCCESS,
        payload: response
    }
}

export const dashboardSummaryFailure = (response) => {
    return {
        type: actionTypes.DASHBOARD_SUMMARY_FAILURE,
        payload: response
    }
}

export const fetchRecentRoutes = (customerId, startDate, endDate, limit) => {
    return {
        type: actionTypes.FETCH_RECENT_ROUTES,
        customerId,
        startDate,
        endDate,
        limit
    }
}

export const startFetchRecentRoutes = (value) => {
    return {
        type: actionTypes.START_FETCHING_RECENT_ROUTES,
        value
    }
}

export const setFetchRecentRoutesSuccess = (recentRoutes) => {
    return {
        type: actionTypes.FETCH_RECENT_ROUTES_SUCCESS,
        recentRoutes
    }
}

export const setFetchRecentRoutesFail = (error) => {
    return {
        type: actionTypes.FETCH_RECENT_ROUTES_FAIL,
        error
    }
}

export const fetchSpecificRouteRequest = (tripID) => {
    return {
        type: actionTypes.FETCH_SPECIFIC_ROUTE_REQUEST,
        tripIDPayload: tripID
    }
}

export const fetchSpecificRouteSuccess = (response) => {
    return {
        type: actionTypes.FETCH_SPECIFIC_ROUTE_SUCCESS,
        payload: response
    }
}

export const fetchSpecificRouteFail = (response) => {
    return {
        type: actionTypes.FETCH_SPECIFIC_ROUTE_FAIL,
        error: response
    }
}

export const fetchWeeklySummaryRequest = (response) => {
    return {
        type: actionTypes.FETCH_WEEKLY_SUMMARY_REQUEST,
        payload: response
    }
}

export const fetchWeeklySummarySuccess = (response) => {
    return {
        type: actionTypes.FETCH_WEEKLY_SUMMARY_SUCCESS,
        payload: response
    }
}

export const fetchWeeklySummaryFail = (response) => {
    return {
        type: actionTypes.FETCH_WEEKLY_SUMMARY_FAIL,
        error: response
    }
}