import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    markers: null,
    currentLocation: null,
    directionServiceOption: null,
    startLocation: null,
    loading: false
}

const addWayPoint = (state, action) => {

}

const setCurrentLocationPoint = (state, action) => {
    return updateObject(state, {currentLocation: action.startPoint})
}

const setStartPoint = (state, action) => {

}

const mapReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_WAY_POINT: return addWayPoint(state, action);
        case actionTypes.SET_CURRENT_USER_LOCATION: return setCurrentLocationPoint(state, action);
        default:
            return state;
    }
}

export default mapReducer;
