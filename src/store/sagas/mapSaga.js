import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from "../actions/index";

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24 // 24 hour
}

export function* fetchCurrentUserLocationSaga() {
    try {
        if (navigator && navigator.geolocation) {
            const location = yield call(getUserLocation);
            let currentLocation = {lat: location.coords.latitude, lng: location.coords.longitude};
            yield put(actions.setCurrentLocationPoint(currentLocation));
        }
    } catch (error) {
        const response = yield call(getUserLocationUsingIp);
        let currentLocation = {lat: response.data.lat, lng: response.data.lon};
        yield put(actions.setCurrentLocationPoint(currentLocation))
    }
}

const getUserLocationUsingIp = () => {
    try {
        return axios.get('http://ip-api.com/json')
    } catch (error) {
        console.log(error);
    }
}

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error),
        geolocationOptions
    )
})
