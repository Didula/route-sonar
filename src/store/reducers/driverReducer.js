import * as type from "../actions/actionTypes";


const initialState = {
    list: '',
    loading: false,
    error: null
}

export default function users(state= initialState, action){
    switch (action.type){
        case type.SEND_DRIVER_DETAILS:
            return {
                ...state,
                loading: true
            }
        case type.SEND_DRIVER_DETAILS_SUCCESS:
            return {
                ...state,
                list: action.response.status,
                loading: false
            }
        case type.SEND_DRIVER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case type.CLEAR_DRIVER_STATE:
            return {
                ...state,
                list: '',
                loading: false,
                error: null
            }
        default:
            return state
    }
}