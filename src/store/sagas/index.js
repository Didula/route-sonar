import {takeEvery,takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes'
import {fetchCurrentUserLocationSaga} from "./mapSaga";
import {fetchPlaceIdSaga} from "./sideContentSaga";

export function* watchMap(){
    yield takeEvery(actionTypes.FETCH_CURRENT_USER_LOCATION, fetchCurrentUserLocationSaga);
}

export function* watchSideContent() {
    yield takeLatest(actionTypes.FETCH_PLACE_ID,fetchPlaceIdSaga);
}
