import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../../shared/utility";

const initialState = {
    placeId: '',
    address: '',
    wayPoint: {
        lat: '',
        lng: ''
    },
    reference: '',
    wayPointForm: {
        values: {
            reference: '',
            location: '',
        },
        errors: {
            reference: '',
            location: '',
        }
    },
    sidePanelWidthPercentage: 25
}

const setPlaceId = (state, action) => {
    return updateObject(state, {placeId: action.placeId})
}

const setWayPoint = (state, action) => {
    let point = {
        lat: action.point.lat,
        lng: action.point.lng
    }
    return updateObject(state, {wayPoint: point})
}

const setReference = (state, action) => {
    return updateObject(state, {reference: action.reference})
}
const setAddress = (state, action) => {
    return updateObject(state, {address: action.address})
}

const validateWaypoint = (state, action) => {
    console.log(action);
    return state
}

const resetForm = (state, action) => {
    return updateObject(state,
        {
            placeId: '',
            address: '',
            wayPoint: {
                lat: '',
                lng: ''
            },
            reference: '',
            wayPointForm: {
                values: {
                    reference: '',
                    location: '',
                },
                errors: {
                    reference: '',
                    location: '',
                }
            }
        })
}

const sideContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLACE_ID:
            return setPlaceId(state, action);
        case actionTypes.SET_WAY_POINT:
            return setWayPoint(state, action);
        case actionTypes.SET_REFERENCE:
            return setReference(state, action);
        case actionTypes.SET_ADDRESS:
            return setAddress(state, action);
        case actionTypes.WAY_POINT_FROM_SUBMIT:
            return validateWaypoint(state, action);
        case actionTypes.RESET_FORM:
            return resetForm(state, action);
        default:
            return state;
    }
}

export default sideContentReducer;
