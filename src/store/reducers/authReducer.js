import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isLoginModalOpen: false,
    userId: null,
    error: false,
    loading: false,
    user: null
}

const setLoginModalOpen = (state, action) => {
    return updateObject(state, {isLoginModalOpen: action.flag})
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN_MODAL_OPEN:
            return setLoginModalOpen(state, action);
        default:
            return state;
    }
}

export default authReducer;
