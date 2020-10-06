import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../../shared/utility";

const initialState = {
    placeId: null
}

const setPlaceId = (state, action) => {
    return updateObject(state, {placeId: action.placeId})
}

const sideContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLACE_ID:
            return setPlaceId(state, action);
        default:
            return state;
    }
}

export default sideContentReducer;
