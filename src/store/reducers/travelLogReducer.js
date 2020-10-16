import * as type from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: false,
    error: null
}

export default function travelLogReducer(state= initialState, action){
    switch (action.type){
        case type.TRAVEL_LOG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.TRAVEL_LOG_SUCCESS:
            console.log('success', action.payload);
            return {
                ...state,
                list: state.list.concat(action.payload),
                loading: false
            }
        case type.TRAVEL_LOG_FAILURE:
            console.log('error', action.payload);
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}