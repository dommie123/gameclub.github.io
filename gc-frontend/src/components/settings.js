import React, {useEffect} from 'react';
import { useSelector/*, useDispatch*/ } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormInput from './form-input';

export function ProfileSettings(props) {
    const user = useSelector(state => state.users.currentUser);
    //const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {}, []);

    if (!user)
        return (
            <Redirect to="/home" />
        )
    return (
        <div className="settings" id="profile-settings">
            <form className="form" style={{position: 'relative', left: "15%"}}>
                <FormInput type="text" name="username" display="Username: " handleChange={handleChange} />
                <FormInput type="text" name="firstName" display="First Name: " handleChange={handleChange} />
                <FormInput type="text" name="lastName" display="Last Name: " handleChange={handleChange} />
                <FormInput type="text" name="email" display="Email Address: " handleChange={handleChange} />
                <FormInput type="submit" display="Update Profile" handleChange={handleSubmit} />
            </form>
        </div>
    )
}