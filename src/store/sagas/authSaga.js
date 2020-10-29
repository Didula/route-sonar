import {call, put} from 'redux-saga/effects';
import * as actions from "../actions/authActions"
import axios from "axios";

const LOG_IN_END_POINT = 'userLogin'

export function* logoutSaga(action) {
    yield call([localStorage, "removeItem"], "userId");
    yield call([localStorage, "removeItem"], "customerId");
    yield call([localStorage, "removeItem"], "userType");
    yield put(actions.logoutSucceed());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        user_name: action.email,
        password: action.password
    }
    let url = process.env.REACT_APP_API_URL + LOG_IN_END_POINT;
    try {
        const response = yield axios.post(url, authData);
        yield localStorage.setItem('userName', authData.user_name)
        yield localStorage.setItem('userId', response.data.user_id)
        yield localStorage.setItem('customerId', response.data.customer_id)
        yield localStorage.setItem('userType', response.data.user_type)
        yield put(actions.authSuccess(response.data.user_id, response.data.customer_id, response.data.user_type));
    } catch (error) {
        console.log(error);
        if (error)
            yield put(actions.authFail(error));
    }
}