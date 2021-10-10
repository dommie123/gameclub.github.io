import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {login} from '../actions/user-actions';
import {addAlert, removeAlert} from '../actions/ui-actions';
import FormInput from './form-input';

import Alert from '@material-ui/lab/Alert';

export default function LoginForm() {
    const [user, setUser] = useState({username:"", password:""});
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCloseAlert = () => {
        dispatch(removeAlert());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user.username));
        dispatch(addAlert(<Alert severity="success" onClose={handleCloseAlert} >Welcome, {user.username}!</Alert>));
        //alert(`Welcome, ${user.username}!`);
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username": setUser({username: e.target.value, password: user.password});
            break;
            case "password": setUser({username: user.username, password: e.target.value});
            break;
            default: console.log(e.target.name);
        }
    }

    useEffect(() => {
        if (currentUser) {
            //console.log("At this point, the redirect should occur.");
            history.push("/home");
        }
    }, [currentUser, history])

    return (
        <div className="container-lg" id="login-container" style={{position: "relative", left: "4%",}}>
            <form onSubmit={handleSubmit} className="form">
                <FormInput type="text" name="username" display="Username: " handleChange={handleChange} />
                <FormInput type="password" name="password" display="Password: " handleChange={handleChange} />
                <FormInput type="submit" display="Log In" />
                <br />
                <p>Don't have an account? <Link to="/register">Sign up</Link>!</p>
            </form>
        </div>
    )
}