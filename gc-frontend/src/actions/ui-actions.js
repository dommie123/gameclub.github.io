import { TOGGLE_ALERT } from "./types";

export function closeAlert() {
    return function(dispatch) {
        return dispatch({
            type: TOGGLE_ALERT
        })
    }
}