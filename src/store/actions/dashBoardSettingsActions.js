import * as actionTypes from '../actions/actionTypes'

export const fetchAggregatedQuota = (customerId) => {
    return {
        type: actionTypes.FETCH_AGGREGATED_QUOTA,
        customerId
    }
}

export const startFetchingAggregatedQuota = (value) => {
    return {
        type: actionTypes.START_FETCHING_AGGREGATED_QUOTA,
        value
    }
}

export const setAggregatedQuotaFetchSuccess = (packageLimit, used, remaining) => {
    return {
        type: actionTypes.AGGREGATED_QUOTA_FETCH_SUCCESS,
        packageLimit,
        used,
        remaining
    }
}

export const setAggregatedQuotaFetchFail = (error) => {
    return {
        type: actionTypes.AGGREGATED_QUOTA_FETCH_FAIL,
        error
    }
}

export const changePassword = (userId,password,newPassword) => {
    return {
        type: actionTypes.CHANGE_PASSWORD,
        userId,
        password,
        newPassword
    }
}

export const startChangePassword = () => {
    return {
        type: actionTypes.START_CHANGE_PASSWORD
    }
}

export const setChangePasswordSuccess = () => {
    return {
        type: actionTypes.CHANGE_PASSWORD_SUCCESS
    }
}

export const setChangePasswordFail = () => {
    return {
        type: actionTypes.CHANGE_PASSWORD_FAIL
    }
}

