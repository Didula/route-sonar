import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    isSidePanelOpen: false
}

const setSidPanelOpen = (state, action) => {
    return updateObject(state, {isSidePanelOpen: action.flag})
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SIDE_PANEL_OPEN:
            return setSidPanelOpen(state, action);
        default:
            return state;
    }
}

export default homeReducer;