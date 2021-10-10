import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Alert} from '@material-ui/lab';
import { removeAlert } from "../actions/ui-actions";

import Snackbar from '@material-ui/core/Snackbar'

export default function Home() {
    // const alertClosed = useSelector(state => state.ui.alertClosed);
    const uiAlert = useSelector(state => state.ui.alert);
    const dispatch = useDispatch();
    //const user = useSelector(state => state.users.currentUser);
    //const [alertVisible, setAlertVisible] = useState(user !== undefined && !alertClosed);

    return (
        <div className="container-fluid" id="home">
            {uiAlert ?             
            <Snackbar 
                anchorOrigin={{vertical: "top", horizontal: "center"}} 
                open={Boolean(uiAlert)} 
                onClose={() => {dispatch(removeAlert())}} 
                autoHideDuration={10000}
            >
                {uiAlert}
            </Snackbar> 
            : <></>}
        </div>
    )
} 