import React from 'react';

export default function FormInput(props) {
    let type = props.type;
    let name = props.name;
    let display = (props.display) ? props.display : name;
    let file = props.file;

    const handleChange = props.handleChange;

    if (type == "submit") {
        return (
            <div className="form-submit">
                <input type="submit" value={display} />
            </div>
        )
    }
    else {
        return (
            <div className="form-input">
                <label>{display}</label>
                <input type={type == "image" ? "file" : type} name={name} accept={type == "image" ? "image/*" : null} multiple={false} onChange={handleChange}/>
                {type == "image" ? <image src={file}></image> : <></>}
            </div>
        )
    }
}