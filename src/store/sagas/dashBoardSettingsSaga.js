import {call, put} from 'redux-saga/effects';
import * as actions from "../actions/index"
import axios from "axios";

const LOG_IN_END_POINT = 'getOpt'

export function* fetchAggregatedQuotaSaga(action) {
    yield put(actions.startFetchingAggregatedQuota())
    const aggregatedQuotaRequest = {
        level: 'agg_quota',
        customer_id: action.customerId
    }
    let url = process.env.REACT_APP_API_URL + LOG_IN_END_POINT;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = yield axios.post(url, aggregatedQuotaRequest);
        yield put(actions.setAggregatedQuotaFetchSuccess(response.data.package_limit, response.data.used, response.data.remaining));
    } catch (error) {
        if (error)
            yield put(actions.setAggregatedQuotaFetchFail(error));
    }
}