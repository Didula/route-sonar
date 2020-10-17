import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

function* getTravelLogData(action) {
    const customerID = 9;
    const startDate = '2020-10-11';
    const endDate = '2020-10-31';
    const apiUrl = `http://18.138.23.29:5000/travelLog?customerID=9&startDate=${startDate}&endDate=${endDate}`;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response = yield axios.get(apiUrl);
        if (response.status === 200){
            yield put({
                type: 'TRAVEL_LOG_SUCCESS',
                payload: response.data
            })
        }
        else{
            throw Error;
        }
    } catch (error) {
        yield put({
            type: 'TRAVEL_LOG_FAILURE',
            error: error.message
        })
    }
}

export function* travelLogSaga(){
    yield takeEvery('TRAVEL_LOG_REQUEST', getTravelLogData)
}