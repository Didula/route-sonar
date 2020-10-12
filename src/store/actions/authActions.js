import * as actionTypes from '../actions/actionTypes'

export const setLoginModalOpen = (value) => {
    return {
        type: actionTypes.SET_LOGIN_MODAL_OPEN,
        flag: value
    }
}

export const authUser = (email, password) => {
    return{
        type: actionTypes.AUTH_USER,
        email,
        password
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userId, customerId, userType) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId,
        customerId,
        userType
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
};

