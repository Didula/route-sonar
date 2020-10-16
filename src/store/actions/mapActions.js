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

export const setCurrentLocationPoint = (currentLocationPoint) => {
    return {
        type: actionTypes.SET_CURRENT_USER_LOCATION,
        currentLocationPoint: currentLocationPoint
    }
}

export const addBlankWayPoint = () => {
    return {
        type: actionTypes.ADD_BLANK_WAY_POINT
    }
}

export const addWayPoint = (wayPoint) => {
    return {
        type: actionTypes.ADD_WAY_POINT,
        wayPoint: wayPoint
    }
}

export const updateWayPoint = (wayPoint, index) => {
    return {
        type: actionTypes.UPDATE_WAY_POINT,
        wayPoint: wayPoint,
        index: index
    }
}

export const prepareDirectionServiceOptions = () => {
    return {
        type: actionTypes.PREPARE_DIRECTION_SERVICE_OPTIONS
    }
}

export const setIsOptimized = (value) => {
    return {
        type: actionTypes.SET_IS_OPTIMIZED,
        value: value
    }
}

export const removeWayPoint = (wayPoint) => {
    return {
        type: actionTypes.REMOVE_WAY_POINT,
        wayPoint: wayPoint
    }
}

export const resetMap = () => {
    return {
        type: actionTypes.RESET_MAP
    }
}

export const setCurrentDirection = (direction) => {
    return {
        type: actionTypes.SET_CURRENT_DIRECTION,
        direction: direction
    }
}

export const prepareWayPointTraversalOrder = () => {
    return {
        type: actionTypes.PREPARE_WAYPOINT_TRAVERSAL_ORDER
    }
}

export const setLoading = (value) => {
    return {
        type: actionTypes.SET_LOADING,
        value: value
    }
}