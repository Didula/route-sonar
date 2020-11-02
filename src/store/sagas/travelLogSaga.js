import {put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

function* getTravelLogData(action) {
    const customerID = action.customerIDPayload;
    const startDate = action.startDate;
    const endDate = action.endDate;

    const apiUrl = process.env.REACT_APP_API_URL + `travelLog?customerID=${customerID}&startDate=${startDate}&endDate=${endDate}`;
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'https://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'https://www.routesonar.com';
        axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
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