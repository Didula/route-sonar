import * as type from "../actions/actionTypes";


const initialState = {
    totalLocations: '',
    distanceCovered: '',
    totalTrips: '',
    loading: false,
    error: null
}

export default function dashboardSummary(state= initialState, action){
    switch (action.type){
        case type.DASHBOARD_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.DASHBOARD_SUMMARY_SUCCESS:
            return {
                ...state,
                totalLocations: action.data.countLocations,
                distanceCovered: action.data.distanceCovered,
                totalTrips: action.data.totalTrips,
                loading: false
            }
        case type.DASHBOARD_SUMMARY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}