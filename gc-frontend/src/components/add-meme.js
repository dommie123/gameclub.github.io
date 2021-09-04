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

    const handleImage = (e) => {
        const file = e.target.files[0];
        // const formData = new FormData();
        // formData.append('image', file);
        // console.log(formData);


        getBase64(file).then(byteArr => {
            localStorage["fileBytes"] = byteArr;
            console.debug("file stored",localStorage["fileBytes"]);
            console.log(/*typeof*/ localStorage["fileBytes"]);
            setMeme({title: meme.title, author: user, bytes: localStorage["fileBytes"]});
        });

    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            // reader.readAsDataURL(file);
            // reader.onerror = (err) => {
            //     console.log("An image-related error occurred! Panic!!!");
            // }
            reader.readAsArrayBuffer(file);
        }) 
    }


    const onChange = (e) => {
        //console.log(e.target.name, e.target.value);
        if (e.target.files)
            console.log(e.target.files[0]);

        // if (!e.target.files[0].type.contains("image")) {
        //     // Display error without a popup.
        // }

        switch (e.target.name) {
            case "title":
                setMeme({title: e.target.value, author: user, bytes: meme.bytes});
                break;
            case "bytes":
                handleImage(e);
                break;
            default: 
                console.log(e.target.name);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(newDankMeme(meme));
        alert("Meme was successfully uploaded!");
        history.push("/memes");
    }

    return (
        <div className="container-md" style={{position: "relative", left: "5%",}}>
            <form onSubmit={onSubmit} className="form">
                <FormInput type="text" name="title" display="Title: " handleChange={onChange} />
                <FormInput type="image" name="bytes" display="Upload Meme Here: " file={meme.bytes} handleChange={handleImage} />
                {user ? <FormInput type="submit" display="Upload Meme" /> : <Redirect to="/memes" />}
            </form>
        </div>
    )

}