import * as actionTypes from '../actions/actionTypes'

export const dashboardSummaryRequest = (customerID) => {
    return {
        type: actionTypes.DASHBOARD_SUMMARY_REQUEST,
        customerIDPayload: customerID
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