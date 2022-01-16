import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {logout} from "../actions/user-actions";
import { removeAlert } from "../actions/ui-actions";

export default function LogOut() {
    const dispatch = useDispatch();
    const closed = useSelector(state => state.ui.alertClosed);

    useEffect(() => {
        dispatch(logout());

        // If the alert has already been closed, reset the alert state
        // so it will re-appear upon user login.
        if (closed)
            dispatch(removeAlert()); 
    })

    return (
        <div id="logout-message">
            <h3 style={{marginBottom: '5px'}}>Thanks for checking in! See you again soon!</h3>
            <br />
            <Link to="/home" id="btn-logout">Back to Home</Link>
        </div>
    )
}