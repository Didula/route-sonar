import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    markers: [],
    currentLocation: null,
    directionServiceOptions: null,
    startLocation: null,
    endLocation: null,
    loading: true,
    isOptimized: false,
    currentDirection: null,
    wayPointTraversalOrder: [],
    urls: []
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
    action.startPoint.reference = 'Start';
    if (state.markers.length === 0) {
        // Adding start point as the first element of markers.
        updatedMarkers = [...state.markers];
        // injecting start point reference.
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
        address: '',
        reference: ''
    }
    // todo : prevent adding blank way points if previous one is also blank
    let updatedMarkers = [...state.markers];
    updatedMarkers.push(blankWayPoint);
    return updateObject(state, {markers: updatedMarkers, isOptimized: false})
}

const addWayPoint = (state, action) => {
    let updatedMarkers = [...state.markers];
    updatedMarkers.push(action.wayPoint);
    return updateObject(state, {markers: updatedMarkers, isOptimized: false})
}

const updateWayPoint = (state, action) => {
    let updatedMarkers = [...state.markers];
    updatedMarkers[action.index] = action.wayPoint;
    return updateObject(state, {markers: updatedMarkers, isOptimized: false});
}

const setDirectionServiceOptions = (state, action) => {
    let endLocation;
    if (state.markers.length > 1) {
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
            endLocation = lastFilledField;
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
                },
                endLocation: endLocation
            });
        }
    } else {
        return state;
    }
}

const setIsOptimized = (state, action) => {
    return updateObject(state, {isOptimized: action.value})
}

const setCurrentDirection = (state, action) => {
    return updateObject(state, {currentDirection: action.direction})
}

const resetMap = (state) => {
    return updateObject(state, {
        markers: [],
        currentLocation: null,
        directionServiceOptions: null,
        startLocation: null,
        loading: state.loading,
        isOptimized: false,
        currentDirection: null,
        wayPointTraversalOrder: [],
        urls : []
    })
}

const removeWayPoint = (state, action) => {
    const updatedWayPoints = state.markers.filter(marker => marker.placeId !== action.wayPoint.placeId);
    return updateObject(state, {
        isOptimized: false,
        markers: updatedWayPoints
    })
}

const setWayPointTraversalOrder = (state) => {
    let url = "https://www.google.com/maps/dir/?api=1";
    let urlList = [];
    let shuffledWayPointOrder = [];
    let updatedWayPointTraversalOrder = [];
    if(state.currentDirection){
        let wayPoints = [...state.markers];
        // remove origin and destination.
        wayPoints.splice(0,1);
        wayPoints.pop();

        shuffledWayPointOrder = state.currentDirection.routes[0].waypoint_order;
        shuffledWayPointOrder.forEach(wayPointIndex => {
            updatedWayPointTraversalOrder.push(wayPoints[wayPointIndex]);
        })

        // Since travelling order of waypoints is only available after receiving the direction response, URL preparation is also done here.
        // 8 or less waypoints : origin -> 8 or les way points -> destination : 1 URL
        if(updatedWayPointTraversalOrder.length <= 8){
            url = url +
                "&origin=" + state.startLocation.coordinates.lat + ',' + state.startLocation.coordinates.lng +
                "&destination=" + state.endLocation.coordinates.lat + ',' + state.endLocation.coordinates.lng + "&waypoints=";
            updatedWayPointTraversalOrder.forEach((waypoint,index) => {
                if(index !== 0){
                    url = url + '|';
                }
               url = url + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
            });
            urlList.push(url);
        }
        // 16 or less way points : first origin -> first 8 way points -> first URL dest -> second origin -> second more than 8 but less than or equal to 16 waypoints -> second dest.
        else if (updatedWayPointTraversalOrder.length <= 16) {
            let firstUrl = url +
                "&origin=" + state.startLocation.coordinates.lat + ',' + state.startLocation.coordinates.lng +
                "&destination=" + updatedWayPointTraversalOrder[8].coordinates.lat + ',' + updatedWayPointTraversalOrder[8].coordinates.lng + "&waypoints=";
            let secondUrl = url +
                "&origin=" + updatedWayPointTraversalOrder[8].coordinates.lat + ',' + updatedWayPointTraversalOrder[8].coordinates.lng +
                "&destination=" + state.endLocation.coordinates.lat + ',' + state.endLocation.coordinates.lng + "&waypoints=";
            updatedWayPointTraversalOrder.forEach((waypoint, index) => {
                if (index < 8) {
                    if (index !== 0) {
                        firstUrl = firstUrl + '|';
                    }
                    firstUrl = firstUrl + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
                } else {
                    if (index !== 8) {
                        secondUrl = secondUrl + '|';
                    }
                    secondUrl = secondUrl + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
                }
            })
            urlList.push(firstUrl);
            urlList.push(secondUrl);
        }
        // more than 16 but less than 23 waypoints.
        else if (updatedWayPointTraversalOrder.length <= 23) {
            let firstUrl = url +
                "&origin=" + state.startLocation.coordinates.lat + ',' + state.startLocation.coordinates.lng +
                "&destination=" + updatedWayPointTraversalOrder[8].coordinates.lat + ',' + updatedWayPointTraversalOrder[8].coordinates.lng + "&waypoints=";
            let secondUrl = url +
                "&origin=" + updatedWayPointTraversalOrder[8].coordinates.lat + ',' + updatedWayPointTraversalOrder[8].coordinates.lng +
                "&destination=" + updatedWayPointTraversalOrder[16].coordinates.lat + ',' + updatedWayPointTraversalOrder[16].coordinates.lng + "&waypoints=";
            let thirdUrl = url +
                "&origin=" + updatedWayPointTraversalOrder[16].coordinates.lat + ',' + updatedWayPointTraversalOrder[16].coordinates.lng +
                "&destination=" + state.endLocation.coordinates.lat + ',' + state.endLocation.coordinates.lng + "&waypoints=";
            updatedWayPointTraversalOrder.forEach((waypoint, index) => {
                if (index < 8) {
                    if (index !== 0) {
                        firstUrl = firstUrl + '|';
                    }
                    firstUrl = firstUrl + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
                } else if (index < 16) {
                    if (index !== 8) {
                        secondUrl = secondUrl + '|';
                    }
                    secondUrl = secondUrl + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
                } else {
                    if (index !== 16) {
                        thirdUrl = thirdUrl + '|';
                    }
                    thirdUrl = thirdUrl + waypoint.coordinates.lat + ',' + waypoint.coordinates.lng;
                }
            })
            urlList.push(firstUrl);
            urlList.push(secondUrl);
            urlList.push(thirdUrl);
        } else {
            // this should not happen ever!
        }
    }
    return updateObject(state, {wayPointTraversalOrder : updatedWayPointTraversalOrder, urls: urlList})
}

const prepareNavigationUrls = (state) => {

}

const setLoading = (state, action) => {
    return updateObject(state, {loading: action.value})
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_START_POINT:
            return setStartPoint(state, action);
        case actionTypes.ADD_BLANK_WAY_POINT:
            return addBlankWayPoint(state, action);
        case actionTypes.ADD_WAY_POINT:
            return addWayPoint(state, action);
        case actionTypes.UPDATE_WAY_POINT:
            return updateWayPoint(state, action);
        case actionTypes.SET_CURRENT_USER_LOCATION:
            return setCurrentLocationPoint(state, action);
        case actionTypes.PREPARE_DIRECTION_SERVICE_OPTIONS:
            return setDirectionServiceOptions(state, action);
        case actionTypes.SET_IS_OPTIMIZED:
            return setIsOptimized(state, action);
        case actionTypes.SET_CURRENT_DIRECTION:
            return setCurrentDirection(state, action);
        case actionTypes.REMOVE_WAY_POINT:
            return removeWayPoint(state, action);
        case actionTypes.RESET_MAP:
            return resetMap(state);
        case actionTypes.PREPARE_WAYPOINT_TRAVERSAL_ORDER:
            return setWayPointTraversalOrder(state);
        case actionTypes.SET_LOADING:
            return setLoading(state, action);
        default:
            return state;
    }
}

export default mapReducer;
