import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

function* getDashboardSummaryData(action) {
    const customerID = action.customerID;
    const startDate = action.startDate;
    const endDate = action.endDate;

    const apiUrl = process.env.REACT_APP_API_URL + `getSummary?customerID=${customerID}&startDate=${startDate}&endDate=${endDate}`;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.get(apiUrl);
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