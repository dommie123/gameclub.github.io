import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../actions/user-actions';
import FormInput from './form-input';
import {Redirect} from "react-router-dom";

export default function RegisterForm() {
    //const currentUser = useSelector(state => state.users.currentUser);
    const isLoggedIn = useSelector(state => state.users.isLoggedIn);
    const [user, setUser] = useState({username:"", firstName:"", lastName:"", password:"", email:"", isAdmin:false});
    const [confirm, setConfirm] = useState("")
    const dispatch = useDispatch();

    const setCurrentUser = (e) => {
        e.preventDefault();
        if (confirm === user.password) {
            dispatch(registerUser(user));
            if (isLoggedIn) {
                alert(`User ${user.username} has been succcessfully logged in!`);
                <Redirect to="/home" />
            }
        }
        else {
            alert("Passwords don't match! Please try again!");
        }
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username": setUser({username: e.target.value, firstName: user.firstName, lastName: user.lastName, password:user.password, email: user.email, isAdmin:user.isAdmin});
            break;
            case "firstName": setUser({username: user.username, firstName: e.target.value, lastName: user.lastName, password:user.password, email: user.email, isAdmin:user.isAdmin});
            break;
            case "lastName": setUser({username: user.username, firstName: user.firstName, lastName: e.target.value, password:user.password, email: user.email, isAdmin:user.isAdmin});
            break;
            case "email": setUser({username: user.username, firstName: user.firstName, lastName: user.lastName, password:user.password, email: e.target.value, isAdmin:user.isAdmin});
            break;
            case "password": setUser({username: user.username, firstName: user.firstName, lastName: user.lastName, password: e.target.value, email: user.email, isAdmin:user.isAdmin});
            break;
            case "confirmPass": setConfirm(e.target.value);
            break;
            default: 
            console.log(e.target.name, e.target.value);
        }
    }

    return (
        <div className="container-lg" id="login-container" style={{position: "relative", left: "4%",}}>
            <form onSubmit={setCurrentUser}>
                <FormInput type="text" name="username" display="Username: " handleChange={handleChange} />
                <FormInput type="text" name="firstName" display="First Name: " handleChange={handleChange} />
                <FormInput type="text" name="lastName" display="Last Name: " handleChange={handleChange} />
                <FormInput type="text" name="email" display="Email: " handleChange={handleChange} />
                <FormInput type="password" name="password" display="Password: " handleChange={handleChange} />
                <FormInput type="password" name="confirmPass" display="Confirm your Password: " handleChange={handleChange} />
                <FormInput type="checkbox" name="agree" display="I agree to the terms and conditions of this site (as mentioned in Discord): " handleChange={handleChange} />
                <FormInput type="submit" display="Register"/>
                <br />
                <p>Already have an account? <Link to="/login">Sign in</Link>!</p>
            </form>
        </div>
    )
}