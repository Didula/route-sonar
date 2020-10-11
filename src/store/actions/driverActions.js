import * as actionTypes from '../actions/actionTypes'

export const sendDriverDetails = (driverData) => {
    console.log('action');
    return {
        type: actionTypes.SEND_DRIVER_DETAILS,
        payload: driverData
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
