import * as actionTypes from '../actions/actionTypes'

export const setSidePanelOpen = (value) => {
    return {
        type: actionTypes.SET_SIDE_PANEL_OPEN,
        flag: value
    }
}

export const saveApiConsumption = (customerId, placesNumber, geoCodeNumber, directionsNumber) => {
    return {
        type: actionTypes.SAVE_API_CONSUMPTION_USAGE,
        customerId,
        placesNumber,
        geoCodeNumber,
        directionsNumber
    }
}

export const saveOptimizedRoute = (userId, customerId, driverId, vehicleId, direction,locationArray) => {
    return {
        type: actionTypes.SAVE_OPTIMIZED_ROUTE,
        userId,
        customerId,
        driverId,
        vehicleId,
        direction,
        locationArray
    }
}