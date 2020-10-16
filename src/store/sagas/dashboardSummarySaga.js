import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

function* getDashboardSummaryData(action) {
    const reqBody = {
        "level": 'agg_customer',
        "customer_id": '10'
    }
    const apiUrl = "http://18.138.23.29:5000/getOpt";
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.post(apiUrl, reqBody);
        if (response.status === 200){
            yield put({
                type: 'DASHBOARD_SUMMARY_SUCCESS',
                data: response.data
            })
        }
        else{
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

export function* dashboardSummarySaga(){
    yield takeEvery('DASHBOARD_SUMMARY_REQUEST', getDashboardSummaryData)
}