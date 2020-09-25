import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    markers: [],
    currentLocation: null,
    directionServiceOptions: null,
    startLocation: null,
    loading: false,
    isOptimized: false
}


const setCurrentLocationPoint = (state, action) => {
    return updateObject(state, {currentLocation: action.currentLocationPoint})
}

/**
 * Other than setting start point, we need to update markers as well, this helps in displaying start point as a marker.
 * @param state
 * @param action
 */
const setStartPoint = (state, action) => {
    let updatedMarkers
    if (state.markers.length === 0) {
        // Adding start point as the first element of markers.
        updatedMarkers = [...state.markers];
        updatedMarkers.push(action.startPoint);
    } else {
        // updating first element.
        updatedMarkers = state.markers;
        updatedMarkers[0] = action.startPoint;
    }
    return updateObject(state, {startLocation: action.startPoint, markers: updatedMarkers, isOptimized: false})
}

const addBlankWayPoint = (state, action) => {
    let blankWayPoint = {
        placeId: '',
        coordinates: {lat: '', lng: ''},
        address: ''
    }
    // todo : prevent adding blank way points if previous one is also blank
    let updatedMarkers = [...state.markers];
    updatedMarkers.push(blankWayPoint);
    return updateObject(state, {markers: updatedMarkers, isOptimized: false})
}

const updateWayPoint = (state, action) => {
    let updatedMarkers = [...state.markers];
    updatedMarkers[action.index] = action.wayPoint;
    return updateObject(state, {markers: updatedMarkers, isOptimized: false});
}

const setDirectionServiceOptions = (state, action) => {
    let wayPoints = [...state.markers];
    let wayPointCoordinates = [];
    let destination;

    if (wayPoints.length > 2) {
        wayPoints.splice(0, 1);
        wayPoints.pop();
    }

    wayPoints.filter(point => point.coordinates.lat !== '' && point.coordinates.lng !== '').map(point => (wayPointCoordinates.push(
        {
            location: point.coordinates,
            stopover: true
        }))
    )
    if (state.markers.length < 2) {
        // Only start point is enabled.
        destination = null;
    } else {
        // Only start point and end point input fields are enabled.
        // Check destination input field is filled.
        let markersClone = [...state.markers];
        let lastFilledField = markersClone.reverse().find(point => (point.coordinates.lat !== '' && point.coordinates.lng !== ''))
        destination = lastFilledField.coordinates;
    }

    if (state.markers.length >= 2) {
        // Always replace the old value.
        return updateObject(state, {
            directionServiceOptions: {
                origin: state.markers[0].coordinates,
                destination: destination,
                travelMode: "DRIVING",
                optimizeWaypoints: true,
                waypoints: wayPointCoordinates
            }
        });
    }
}

const setIsOptimized = (state, action) => {
    return updateObject(state, {isOptimized: action.value})
}


const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_START_POINT:
            return setStartPoint(state, action);
        case actionTypes.ADD_BLANK_WAY_POINT:
            return addBlankWayPoint(state, action);
        case actionTypes.UPDATE_WAY_POINT:
            return updateWayPoint(state, action);
        case actionTypes.SET_CURRENT_USER_LOCATION:
            return setCurrentLocationPoint(state, action);
        case actionTypes.PREPARE_DIRECTION_SERVICE_OPTIONS:
            return setDirectionServiceOptions(state, action);
        case actionTypes.SET_IS_OPTIMIZED:
            return setIsOptimized(state, action);
        default:
            return state;
    }
}

export default mapReducer;
