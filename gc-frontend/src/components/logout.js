import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {logout} from "../actions/user-actions"

export default function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    })

    return (
        <div id="logout-message">
            <h3>Thanks for checking in! See you again soon!</h3>
        </div>
    )
}