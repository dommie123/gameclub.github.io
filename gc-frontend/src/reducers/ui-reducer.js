import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {
    alert: null
}

export default function uiReducer(state=initialState, action) {
    switch (action.type) {

        case ADD_ALERT:
        return {
            ...state,
            alert: action.payload
        }
        case REMOVE_ALERT: 
        return {
            ...state, 
            alert: initialState.alert
        }
        default:
        return state;
    }
}

