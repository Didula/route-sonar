import axios from 'axios';
import {put} from "redux-saga/effects";
import * as actions from '../actions/index'

export function* fetchPlaceIdSaga(action) {
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=6.985149,80.280068&key=AIzaSyB_OjxFPgR42bOlSCfJp_S6rEJTqoJMsfI
    const queryParams = '?latlng=' + action.pointAsString + '&key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    try {
        const response = yield axios.get('https://maps.googleapis.com/maps/api/geocode/json'+ queryParams);
        // response contains multiple levels of address types. always 1st object is the smallest address category.
        // so we always select the 1st object.
        const placeId = response ? response.data? response.data.results ? response.data.results[0].place_id : null : null : null;
        yield put(actions.setPlaceId(placeId));
    } catch (error) {
        console.log(error)
    }
}
