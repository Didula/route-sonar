import * as actionTypes from '../actions/actionTypes'

export const fetchPlaceId = (pointAsString) => {
    return {
        type: actionTypes.FETCH_PLACE_ID,
        pointAsString: pointAsString
    }
}

export const setPlaceId = (placeId) => {
    return {
        type: actionTypes.SET_PLACE_ID,
        placeId: placeId
    }
}

export const setWayPoint = (point) => {
    return {
        type: actionTypes.SET_WAY_POINT,
        point: point
    }
}

export const setReference = (reference) => {
    return {
        type: actionTypes.SET_REFERENCE,
        reference: reference
    }
}

export const setAddress = (address) => {
    return {
        type: actionTypes.SET_ADDRESS,
        address: address
    }
}

export const wayPointFormSubmit = (payload) => {
    return {
        type: actionTypes.WAY_POINT_FROM_SUBMIT,
        payload: payload
    }
}
export const resetForm = () => {
    return {
        type: actionTypes.RESET_FORM
    }
}
