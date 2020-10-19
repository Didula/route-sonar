import {all, takeEvery, takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes'
import {fetchCurrentUserLocationSaga} from "./mapSaga";
import {fetchPlaceIdSaga} from "./sideContentSaga";
import {driverSaga} from "./driverSaga";
import {authUserSaga, logoutSaga} from "./authSaga"
import {dashboardSummarySaga} from './dashboardSummarySaga';
import {travelLogSaga} from './travelLogSaga';
import {fetchAggregatedQuotaSaga, changePasswordSaga} from "./dashBoardSettingsSaga";
import {saveApiConsumptionSaga, saveOptimizedRouteSaga} from "./homeSaga";

export function* watchMap() {
    yield takeEvery(actionTypes.FETCH_CURRENT_USER_LOCATION, fetchCurrentUserLocationSaga);
}

export function* watchSideContent() {
    yield takeLatest(actionTypes.FETCH_PLACE_ID, fetchPlaceIdSaga);
}

export function* watchAuth() {
    yield takeLatest(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}

export function* watchDashboardSettings() {
    yield takeEvery(actionTypes.FETCH_AGGREGATED_QUOTA, fetchAggregatedQuotaSaga);
    yield takeLatest(actionTypes.CHANGE_PASSWORD,changePasswordSaga)
}

export function* watchHome() {
    yield takeLatest(actionTypes.SAVE_API_CONSUMPTION_USAGE, saveApiConsumptionSaga);
    yield takeLatest(actionTypes.SAVE_OPTIMIZED_ROUTE,saveOptimizedRouteSaga);
}

// export function* watchDriverSend() {
//     yield takeLatest(actionTypes.SEND_DRIVER_DETAILS, driverSaga);
// }

export default function* rootSaga() {
    yield all([
        driverSaga(),
        dashboardSummarySaga(),
        travelLogSaga()
    ])
}
