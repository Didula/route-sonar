import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

function* getTravelLogData(action) {
    const reqBody = {
        "level": 'agg_customer',
        "customer_id": '10'
    }
    const apiUrl = "http://18.138.23.29:5000/getOpt";
    try {
        // axios.defaults.headers.post['Content-Type'] = 'application/json';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // const response = yield axios.post(apiUrl, reqBody);
        // if (response.status === 200){
            const data = [
                {
                    ref: "Trip Reference #1",
                    date: "03rd Dec 2020",
                    sTime: "03:45 PM",
                    driver: "Siripala"
                },
                {
                    ref: "Trip Reference #2",
                    date: "03rd Dec 2020",
                    sTime: "06:45 PM",
                    driver: "Sirisena"
                },
                {
                    ref: "Trip Reference #3",
                    date: "13rd Dec 2020",
                    sTime: "08:45 PM",
                    driver: "Gunapala"
                },
                {
                    ref: "Trip Reference #4",
                    date: "23rd Dec 2020",
                    sTime: "10:45 PM",
                    driver: "Senapala"
                }
            ]
            yield put({
                type: 'TRAVEL_LOG_SUCCESS',
                payload: data
            })
        // }
        // else{
        //     throw Error;
        // }
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