import * as actionTypes from '../actions/actionTypes'

export const setSidePanelOpen = (value) => {
    return {
        type: actionTypes.SET_SIDE_PANEL_OPEN,
        flag: value
    }
}

