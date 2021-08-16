import { TOGGLE_ALERT } from "../actions/types";

const initialState = {
    alertClosed: false
};

export default function(state=initialState, action) {
    switch (action.type) {
        case TOGGLE_ALERT:
        return {
            ...state,
            alertClosed: !state.alertClosed
        }
        default:
        return state;
    }
}

