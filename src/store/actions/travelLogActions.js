import * as actionTypes from '../actions/actionTypes'

export const travelLogRequest = (customerID) => {
    return {
        type: actionTypes.TRAVEL_LOG_REQUEST,
        customerIDPayload: customerID
    }
}

export const travelLogSuccess = (response) => {
    return {
        type: actionTypes.TRAVEL_LOG_SUCCESS,
        payload: response
    }
}

export const travelLogFailure = (response) => {
    return {
        type: actionTypes.TRAVEL_LOG_FAILURE,
        payload: response
    }
}