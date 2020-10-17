import * as type from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: false,
    error: null
}

const modifyLogDetails = (input) => {
    input.map((item) => {
        let date = new Date(item.dateTime);
        item.date = date.toLocaleDateString('en-CA');
        item.time = date.toLocaleTimeString();
    })
    return input;
}

export default function travelLogReducer(state= initialState, action){
    switch (action.type){
        case type.TRAVEL_LOG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.TRAVEL_LOG_SUCCESS:
            state.list = [];
            const modifiedObj = modifyLogDetails(action.payload);
            return {
                ...state,
                list: state.list.concat(modifiedObj),
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