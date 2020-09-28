import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes'
import {fetchCurrentUserLocationSaga} from "./mapSaga";

export function* watchMap(){
    yield takeEvery(actionTypes.FETCH_CURRENT_USER_LOCATION, fetchCurrentUserLocationSaga);
}
