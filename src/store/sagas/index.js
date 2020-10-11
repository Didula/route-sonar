import {takeEvery,takeLatest, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes'
import {fetchCurrentUserLocationSaga} from "./mapSaga";
import {fetchPlaceIdSaga} from "./sideContentSaga";
import {driverSaga} from "./driverSaga";

export function* watchMap(){
    yield takeEvery(actionTypes.FETCH_CURRENT_USER_LOCATION, fetchCurrentUserLocationSaga);
}

export function* watchSideContent() {
    yield takeLatest(actionTypes.FETCH_PLACE_ID,fetchPlaceIdSaga);
}

// export function* watchDriverSend() {
//     yield takeLatest(actionTypes.SEND_DRIVER_DETAILS, driverSaga);
// }

export default function* rootSaga() {
    yield all([
        driverSaga()
    ])
}
