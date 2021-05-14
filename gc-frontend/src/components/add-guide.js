import React, {useState, useSelector, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import FormInput from './form-input';
import {newGuide} from '../actions/guide-actions';
import { Redirect } from 'react-router';

export default function AddGuide() {
    const user = useSelector(state => state.users.currentUser);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const onChange = (e) => {
        switch (e.target.name) {
            case "title": setTitle(e.target.value);
            break;
            case "description": setDescription(e.target.value);
            break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        dispatch(newGuide({title:title, description:description, author:user}));
    }

    return (
        <form onSubmit={onSubmit}>
            <FormInput type="text" name="title" display="Title: " handleChange={onChange} />
            <FormInput type="text" name="description" display="Description: " handleChange={onChange} />
            {(user) ? <FormInput type="submit" value="Submit Meme" /> : <Redirect to="/guides" />}
        </form>
    )
}