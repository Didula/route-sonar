import * as actionTypes from '../actions/actionTypes'

export const setLoginModalOpen = (value) => {
    return {
        type: actionTypes.SET_LOGIN_MODAL_OPEN,
        flag: value
    }
}