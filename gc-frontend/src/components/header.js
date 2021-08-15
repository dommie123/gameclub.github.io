import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Header(props) {
    let title = props.title;
    let navIsHidden = props.navIsHidden;
    const user = useSelector(state => state.users.currentUser);
    const isSubtitle= props.isSubtitle;
    //console.log(user);

    if (navIsHidden) {
        return (
            <div className="container-lg">
            <header className={(isSubtitle) ? "subtitle" : "header"}>
                {(isSubtitle) ? <h3>{title}</h3> : <h1>{title}</h1>}
            </header>
        </div>
        )
    }
    else {
        return (
            <div className="container-lg">
                <nav className="nav">
                    <Link to="/home" className="first-link" >Home</Link>
                    <Link to="/guides">Guides</Link>
                    <Link to="/memes">Meme Gallery</Link>
                    <Link to="/about-us">About Us</Link>
                    {(user) ? <Link to="/settings">Settings</Link> : <></>}
                    {(user) ? <Link to="/logout">Sign Out</Link>  
                            : <Link to="/login">Sign In</Link>}
                    {(user) ? <></> : <Link to="/register">Sign Up</Link>}                   
                </nav>
                <header className="header">
                    {(isSubtitle) ? <h3>{title}</h3> : <h1>{title}</h1>}
                </header>
            </div>
        )
    }
}