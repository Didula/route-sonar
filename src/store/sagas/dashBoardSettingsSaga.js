import {put} from 'redux-saga/effects';
import * as actions from "../actions/index"
import axios from "axios";

const FETCH_AGGREGATED_QUOTA_END_POINT = 'getOpt'
const CHANGE_PASSWORD_END_POINT = 'userUpdate'

export function* fetchAggregatedQuotaSaga(action) {
    yield put(actions.startFetchingAggregatedQuota())
    const aggregatedQuotaRequest = {
        level: 'agg_quota',
        customer_id: action.customerId
    }
    let url = process.env.REACT_APP_API_URL + FETCH_AGGREGATED_QUOTA_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.post(url, aggregatedQuotaRequest);
        yield put(actions.setAggregatedQuotaFetchSuccess(response.data.package_limit, response.data.used, response.data.remaining));
    } catch (error) {
        if (error)
            yield put(actions.setAggregatedQuotaFetchFail(error));
    }
}

export function* changePasswordSaga(action){
    yield put(actions.startChangePassword());
    const changePasswordRequest = {
        user_id: action.userId,
        user_name: localStorage.getItem('userName'),
        password: action.password,
        new_password: action.newPassword
    }
    let url = process.env.REACT_APP_API_URL + CHANGE_PASSWORD_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.post(url, changePasswordRequest);
        yield put(actions.setChangePasswordSuccess(response.data));
    } catch (error) {
        if (error)
            yield put(actions.setChangePasswordFail(error));
    }
}