import React, {useSelector} from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    let title = props.title;
    let navIsHidden = props.navIsHidden;
    const user = {};

    if (navIsHidden) {
        return (
            <div className="container-lg">
            <header className="header">
                <h1>{title}</h1>
            </header>
        </div>
        )
    }
    else {
        return (
            <div className="container-lg">
                <nav className="nav">
                    <Link to="/home">Home</Link>
                    <Link to="/guides">Guides</Link>
                    <Link to="/memes">Meme Gallery</Link>
                    <Link to="/about-us">About Us</Link>
                    {(user) ? <Link to="/logout">Sign Out</Link>  
                            : <Link to="/login">Sign In</Link>}
                    {(user) ? <></> : <Link to="/register">Sign Up</Link>}
                </nav>
                <header className="header">
                    <h1>{title}</h1>
                </header>
            </div>
        )
    }
}