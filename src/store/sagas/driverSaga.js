import {call, put, takeEvery} from 'redux-saga/effects';

const DRIVER_ADD_END_POINT = 'driverAdd'

function getAPI(driverDetails, customerID) {
    const reqBody = {
        "customer_id": customerID,
        "name": driverDetails.name,
        "address": driverDetails.vehicleNo,
        "tele": '94' + driverDetails.mobileNo
    }
    return fetch(
        (process.env.REACT_APP_API_URL + DRIVER_ADD_END_POINT),
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
        throw error
    })
}

function* sendDrivers(action) {
    try{
        const response = yield call(getAPI, action.payload, action.customerIDPayload);
        if (response === 'ERROR: this driver already exists'){
            throw Error;
        }
        yield put({
            type: 'SEND_DRIVER_DETAILS_SUCCESS',
            response: response
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