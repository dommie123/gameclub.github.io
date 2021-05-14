import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../actions/user-actions';
import FormInput from './form-input';

export default function LoginForm() {
    const [user, setUser] = useState({username:"", password:""});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user.username));
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

    return (
        <form onSubmit={handleSubmit}>
            <FormInput type="text" name="username" display="Username: " handleChange={handleChange} />
            <FormInput type="password" name="password" display="Password: " handleChange={handleChange} />
            <FormInput type="submit" display="Log In" />
        </form>
    )
}