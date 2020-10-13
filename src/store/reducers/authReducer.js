import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isLoginModalOpen: false,
    userId: null,
    customerId: null,
    userType: null,
    error: false,
    loading: false,
    user: null
}

const setLoginModalOpen = (state, action) => {
    return updateObject(state, {isLoginModalOpen: action.flag})
}

const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true})
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        userId: action.userId,
        customerId: action.userId,
        userType: action.userType,
        error: null,
        loading: false,
        isLoginModalOpen: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        userId: null,
        customerId: null,
        userType: null
    })
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN_MODAL_OPEN:
            return setLoginModalOpen(state, action);
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action)
        default:
            return state;
    }
}

export default authReducer;
