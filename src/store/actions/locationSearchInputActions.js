import * as actionTypes from '../actions/actionTypes'

export const savePlacesApiUsage = (customerId) => {
    return {
        type: actionTypes.SAVE_PLACES_API_USAGE,
        customerId
    }
}