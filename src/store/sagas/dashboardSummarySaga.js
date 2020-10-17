import {put, takeEvery} from 'redux-saga/effects';
import axios from "axios";
import * as actions from "../actions";
import * as actionTypes from '../actions/actionTypes'

const FETCH_RECENT_ROUTES_END_POINT = 'recentRoutes'

function* getDashboardSummaryData(action) {
    const customerID = action.customerID;
    const startDate = action.startDate;
    const endDate = action.endDate;

    const apiUrl = process.env.REACT_APP_API_URL + `getSummary?customerID=${customerID}&startDate=${startDate}&endDate=${endDate}`;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.get(apiUrl);
        if (response.status === 200) {
            yield put({
                type: 'DASHBOARD_SUMMARY_SUCCESS',
                data: response.data
            })
        } else {
            throw Error;
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: 'DASHBOARD_SUMMARY_FAILURE',
            error: error.message
        })
    }
}

export function* fetchRecentRoutesSaga(action) {
    yield put(actions.startFetchRecentRoutes(true))
    const queryParams = '?customerID=' + action.customerId + '&startDate=' + action.startDate + '&endDate=' + action.endDate + '&limit=' + action.limit;
    let url = process.env.REACT_APP_API_URL + FETCH_RECENT_ROUTES_END_POINT;
    try {
        const recentRoutes = [];
        const response = yield axios.get(url + queryParams);
        response.data.map(route => {
            recentRoutes.push(route);
        })
        yield put(actions.setFetchRecentRoutesSuccess(recentRoutes));
    } catch (error) {
        if (error) {
            console.log(error);
            yield put(actions.setFetchRecentRoutesFail(error));
        }
    }
}

export function* dashboardSummarySaga() {
    yield takeEvery('DASHBOARD_SUMMARY_REQUEST', getDashboardSummaryData);
    yield takeEvery(actionTypes.FETCH_RECENT_ROUTES, fetchRecentRoutesSaga)
}