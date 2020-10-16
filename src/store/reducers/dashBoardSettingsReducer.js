import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    changePasswordLoading: false,
    changePasswordError: null,
    packageQuotaLimit: 0,
    usedQuota: 0,
    remainingQuota: 0,
    fetchQuotaLoading: false,
    fetchQuotaError: null
}

const setFetchQuotaLoading = (state, action) => {
    return updateObject(state, {fetchQuotaLoading: action.value})
}

const setQuotaData = (state, action) => {
    return updateObject(state,
        {
            fetchQuotaLoading: false,
            packageQuotaLimit: action.packageLimit,
            usedQuota: action.used,
            remainingQuota: action.remaining
        }
    )
}

const setQuotaFetchingError = (state, action) => {
    return updateObject(state,
        {
            fetchQuotaLoading: false,
            fetchQuotaError: action.error
        }
    )
}

const setChangePasswordLoading = (state) => {
    return updateObject(state,
        {
            changePasswordLoading: true
        }
    )
}

const setChangePasswordSuccessStatus = (state) => {
    return updateObject(state,
        {
            changePasswordLoading: false
        }
    )
}

const setChangePasswordErrorStatus = (state, action) => {
    return updateObject(state,
        {
            changePasswordLoading: false,
            changePasswordError: action.error
        }
    )
}

const dashBoardSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCHING_AGGREGATED_QUOTA:
            return setFetchQuotaLoading(state, action)
        case actionTypes.AGGREGATED_QUOTA_FETCH_SUCCESS:
            return setQuotaData(state, action)
        case actionTypes.AGGREGATED_QUOTA_FETCH_FAIL:
            return setQuotaFetchingError(state, action)
        case actionTypes.START_CHANGE_PASSWORD:
            return setChangePasswordLoading(state)
        case actionTypes.CHANGE_PASSWORD_SUCCESS:
            return setChangePasswordSuccessStatus(state, action)
        case actionTypes.CHANGE_PASSWORD_FAIL:
            return setChangePasswordErrorStatus(state, action)
        default:
            return state
    }
}

export default dashBoardSettingsReducer;