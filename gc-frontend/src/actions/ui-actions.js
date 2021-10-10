import { ADD_ALERT, REMOVE_ALERT } from "./types";

export function addAlert(alert) {
    return function(dispatch) {
        console.log(alert);
        return dispatch({
            type: ADD_ALERT,
            payload: alert
        })
    }
}

export function removeAlert() {
    return function(dispatch) {
        return dispatch({
            type: REMOVE_ALERT,
        })
    }
}