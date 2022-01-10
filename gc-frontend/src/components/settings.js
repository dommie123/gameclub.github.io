import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormInput from './form-input';
import { updateUser } from '../actions/user-actions';

export function ProfileSettings(props) {
    const user = useSelector(state => state.users.currentUser);
    const [updatedUser, UpdateUser] = useState(user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        UpdateUser({...updatedUser, [e.target.name]: e.target.value});
        console.log(updatedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(user, updatedUser));
        console.log("User has been updated!");
    }

    useEffect(() => {}, [updatedUser]);

    if (!user)
        return (
            <Redirect to="/home" />
        )
    return (
        <div className="settings" id="profile-settings">
            <form onSubmit={handleSubmit} className="form" style={{position: 'relative', left: "15%"}}>
                <FormInput type="text" name="username" display="Username: " handleChange={handleChange} />
                <FormInput type="text" name="firstName" display="First Name: " handleChange={handleChange} />
                <FormInput type="text" name="lastName" display="Last Name: " handleChange={handleChange} />
                <FormInput type="text" name="email" display="Email Address: " handleChange={handleChange} />
                <FormInput type="submit" display="Update Profile" />
            </form>
        </div>
    )
}