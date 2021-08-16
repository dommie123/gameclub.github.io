import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Alert} from '@material-ui/lab';
import { closeAlert } from "../actions/ui-actions";

export default function Home() {
    const alertClosed = useSelector(state => state.ui.alertClosed);
    const user = useSelector(state => state.users.currentUser);
    const [alertVisible, setAlertVisible] = useState(user != undefined && !alertClosed);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Alert Visible: ", alertVisible);
    }, [alertVisible])

    return (
        <div className="container-fluid" id="home">
            {user && !alertClosed ? <Alert onClose={() => {dispatch(closeAlert());}}>Welcome, {user.username}!</Alert> : <></>}
        </div>
    )
} 