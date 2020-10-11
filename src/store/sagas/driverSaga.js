import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = "http://18.138.23.29:5000/driverAdd";

function getAPI(driverDetails) {
    return fetch(
        apiUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"customer_id":999,"name":"driver17676767","address":"address1hghh","tele":"telehhjghjhj"})
        }
    ).then(response => response.json())
    .catch((error) => {throw error})
}

function* sendDrivers(action) {
    try{
        const response = yield call(getAPI(action.payload));
        console.log('response', response, response.status);
        yield put({
            type: 'SEND_DRIVER_DETAILS_SUCCESS',
            list: response
        })
    }
    catch(e){
        yield put({
            type: 'SEND_DRIVER_DETAILS_FAILURE',
            error: e.message
        })
    }
}

export function* driverSaga(){
    yield takeEvery('SEND_DRIVER_DETAILS', sendDrivers)
}