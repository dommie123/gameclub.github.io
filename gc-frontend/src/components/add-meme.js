import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import { newDankMeme } from "../actions/meme-actions";
import FormInput from "./form-input";

export default function AddMeme() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.currentUser);
    const [meme, setMeme] = useState({title: "", author: user, bytes: []});
    const history = useHistory();

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        switch (e.target.name) {
            case "title":
                setMeme({title: e.target.value, author: user, bytes: meme.bytes});
                break;
            case "bytes":
                setMeme({title: meme.title, author: user, bytes: e.target.value});
                break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(newDankMeme(meme));
        alert("Meme was successfully uploaded!");
        history.push("/memes");
    }

    return (
        <div className="container-md">
            <form onSubmit={onSubmit} className="form">
                <FormInput type="text" name="title" display="Title: " handleChange={onChange} />
                <FormInput type="image" name="bytes" display="Upload Meme Here: " handleChange={onChange} />
                {user ? <FormInput type="submit" display="Upload Meme" /> : <Redirect to="/memes" />}
            </form>
        </div>
    )

}