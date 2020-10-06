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
