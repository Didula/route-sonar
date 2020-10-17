import * as actionTypes from '../actions/actionTypes'

export const dashboardSummaryRequest = (customerID, startDate, endDate) => {
    return {
        type: actionTypes.DASHBOARD_SUMMARY_REQUEST,
        customerIDPayload: customerID,
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