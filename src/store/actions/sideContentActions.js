import * as actionTypes from '../actions/actionTypes'

export const fetchPlaceId = (point) => {
    return {
        type: actionTypes.FETCH_PLACE_ID,
        point: point
    }
}

export const setPlaceId = (placeId) => {
    return {
        type: actionTypes.SET_PLACE_ID,
        placeId: placeId
    }
}
