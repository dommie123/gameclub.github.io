import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from './form-input';
import {newGuide} from '../actions/guide-actions';
import { Redirect, useHistory } from 'react-router';

export default function AddGuide() {
    const user = useSelector(state => state.users.currentUser);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const onChange = (e) => {
        switch (e.target.name) {
            case "title": setTitle(e.target.value);
            break;
            case "description": setDescription(e.target.value);
            break;
            default: 
            console.log(e.target.name);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        dispatch(newGuide({title:title, description:description, author:user}));
        alert("Guide was successfully uploaded!");
        history.push("/guides");
    }

    return (
        <div className="container-lg" style={{position: "relative", left: "5%",}}>
            <form onSubmit={onSubmit} className="form">
                <FormInput type="text" name="title" display="Title: " handleChange={onChange} />
                <FormInput type="text" name="description" display="Description: " handleChange={onChange} />
                {user ? <FormInput type="submit" value="Submit Meme" /> : <Redirect to="/guides" />}
            </form>
        </div>
    )
}