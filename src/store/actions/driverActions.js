import * as actionTypes from '../actions/actionTypes'

export const sendDriverDetails = (driverData, customerID, urls) => {
    return {
        type: actionTypes.SEND_DRIVER_DETAILS,
        payload: driverData,
        customerIDPayload: customerID,
        urls
    }
}

export const sendDriverDetailsSuccess = (driverData) => {
    return {
        type: actionTypes.SEND_DRIVER_DETAILS_SUCCESS,
        payload: driverData
    }
}

export const sendDriverDetailsFailure = (driverData) => {
    return {
        type: actionTypes.SEND_DRIVER_DETAILS_FAILURE,
        payload: driverData
    }
}

export const clearDriverState = () => {
    return {
        type: actionTypes.CLEAR_DRIVER_STATE,
    }
}

export const clearDriverStateSuccess = (driverData) => {
    return {
        type: actionTypes.CLEAR_DRIVER_STATE_SUCCESS,
    }
}

export const clearDriverStateFailure = (driverData) => {
    return {
        type: actionTypes.CLEAR_DRIVER_STATE_FAILURE,
    }
}
