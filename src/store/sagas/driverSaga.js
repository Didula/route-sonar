import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = "http://18.138.23.29:5000/driverAdd";

function getAPI(driverDetails) {
    const reqBody = {
        "customer_id": 75,
        "name": driverDetails.name,
        "address": driverDetails.vehicleNo,
        "tele": driverDetails.mobileNo
    }
    return fetch(
        apiUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }
    ).then(response => {
        return response;
    })
    .catch((error) => {
        console.log('ert', error)
        throw error
    })
}

function* sendDrivers(action) {
    try{
        const response = yield call(getAPI, action.payload);
        console.log('response', response.text());
        if (response === 'ERROR: this driver already exists'){
            throw Error;
        }
        yield put({
            type: 'SEND_DRIVER_DETAILS_SUCCESS',
            response: response
        })
    }
    catch(e){
        console.log('ohh', e);
        yield put({
            type: 'SEND_DRIVER_DETAILS_FAILURE',
            error: e.message
        })
    }
}

export function* driverSaga(){
    yield takeEvery('SEND_DRIVER_DETAILS', sendDrivers)
}

// export function* clearDriverStateSaga(){
//     yield takeEvery('SEND_DRIVER_DETAILS', sendDrivers)
// }