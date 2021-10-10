import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import { newDankMeme } from "../actions/meme-actions";
import FormInput from "./form-input";
import { GameClubDB } from "../actions/axios-endpoints";

export default function AddMeme() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.currentUser);
    const [meme, setMeme] = useState({title: "", author: user, bytes: []});
    const [file, setFile] = useState(null);
    //const [buffer, setBuffer] = useState(null);
    const history = useHistory();

    const handleImage = (e) => {
        setFile(e.target.files[0]);
        // const stream = file.stream();
        // const reader = stream.getReader();
        // // console.log(reader.read(stream));
        // reader.read(stream).then(res => {
        //     console.log(res.value.buffer);
        //     //setBuffer(res.value.buffer);
        // });
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
        const formData = new FormData();
        formData.append('file', file);
        GameClubDB.post("/image/upload", {
            processData : false,
            contentType : false,
            data : formData,
            success : function(){
                alert("Meme was successfully uploaded!");
            },
            error : function(e){
                console.warn("Image upload failed! Error:", e);
            }
        })
        //dispatch(newDankMeme(meme));
        history.push("/memes");
    }

    useEffect(() => {
        setMeme({title: meme.title, author: user, bytes: file});
    }, [file])

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