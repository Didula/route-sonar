import {call} from 'redux-saga/effects';
import axios from "axios";

const CONSUMPTION_SAVE_END_POINT = 'consumptionAdd'
const optimizedLocation = {
    "distance_from_last_point": 0,
    "eta": "01/01/2000 00:00:00",
    "lat": 0,
    "lon": 0,
    "order": 0,
    "place": null
}

export function* saveApiConsumptionSaga(action) {
    const saveApiConsumptionRequest = {
        "customer_id": action.customerId,
        "places": action.placesNumber,
        "directions": action.directionsNumber,
        "geocoding": action.geoCodeNumber
    }
    let url = process.env.REACT_APP_API_URL + CONSUMPTION_SAVE_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = yield axios.post(url, saveApiConsumptionRequest);
    } catch (error) {

    }
}

export function* saveOptimizedRouteSaga(action) {
    const routeSaveRequest = {
        "customer_id": action.customerId,
        "user_id": action.userId,
        "trip_id": yield call(generateUUID),
        "vehicle_id": action.vehicleId,
        "driver_id": action.driverId,
        "start_time": "01/01/2000 00:00:00",
        "end_time": "01/01/2000 00:00:00",
        "optimized_distance": 0,
        "estimated_distance": 0,
        "nof_locations": action.locationArray.length - 1,
        "total_minutes": 0,
        "optLocations": []
    }
    getDataFromDirection(action.direction,routeSaveRequest)
    console.log(routeSaveRequest);
    let url = process.env.REACT_APP_API_URL + CONSUMPTION_SAVE_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = yield axios.post(url, routeSaveRequest);
    } catch (error) {

    }
}

function generateUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function getDataFromDirection(direction,routeSaveRequest) {
    let totalDistance = 0;
    let totalTime = 0;
    let optLocations = [];
    let currentTime = new Date();
    let endTime = new Date();
    let currentTimeString = `${
        currentTime.getDate().toString().padStart(2, '0')}/${
        (currentTime.getMonth()+1).toString().padStart(2, '0')}/${
        currentTime.getFullYear().toString().padStart(4, '0')} ${
        currentTime.getHours().toString().padStart(2, '0')}:${
        currentTime.getMinutes().toString().padStart(2, '0')}:${
        currentTime.getSeconds().toString().padStart(2, '0')}`
    if (direction) {
        direction.routes[0].legs.forEach(leg => {
            totalDistance += leg.distance.value;
            totalTime += leg.duration.value;

            let locationClone = {...optimizedLocation};
            locationClone.distance_from_last_point = leg.distance.value/1000;
            locationClone.lat = leg.end_location.lat();
            locationClone.lon = leg.end_location.lng();
            locationClone.place = leg.end_address;
            optLocations.push(locationClone);
        })
    }
    endTime.setMinutes(endTime.getMinutes() + totalTime/60)
    let endTimeString = `${
        endTime.getDate().toString().padStart(2, '0')}/${
        (endTime.getMonth()+1).toString().padStart(2, '0')}/${
        endTime.getFullYear().toString().padStart(4, '0')} ${
        endTime.getHours().toString().padStart(2, '0')}:${
        endTime.getMinutes().toString().padStart(2, '0')}:${
        endTime.getSeconds().toString().padStart(2, '0')}`
    routeSaveRequest.optimized_distance = totalDistance/1000;
    routeSaveRequest.estimated_distance = totalDistance + totalDistance/1000 * 0.15;
    routeSaveRequest.start_time = currentTimeString;
    routeSaveRequest.end_time = endTimeString;
    routeSaveRequest.total_minutes = totalDistance/60;
    routeSaveRequest.optLocations = optLocations;
}