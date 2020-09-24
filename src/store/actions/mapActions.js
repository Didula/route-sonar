import * as actionTypes from '../actions/actionTypes'

export const fetchStartPoint = () => {
    return {
        type: actionTypes.FETCH_CURRENT_USER_LOCATION
    }
}

export const setStartPoint = (startPoint) => {
    return {
        type: actionTypes.SET_START_POINT,
        startPoint: startPoint
    }
}

export const setCurrentLocationPoint = (startPoint) => {
    return {
        type: actionTypes.SET_CURRENT_USER_LOCATION,
        startPoint: startPoint
    }
}

export const addWayPoint = (wayPoint) => {
    return {
        type: actionTypes.ADD_WAY_POINT,
        wayPoint: wayPoint
    }
}

export const removeWayPoint = (wayPoint) => {
    return {
        type: actionTypes.REMOVE_WAY_POINT,
        wayPoint: wayPoint
    }
}
