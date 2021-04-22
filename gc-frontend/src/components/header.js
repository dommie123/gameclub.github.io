import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    let title = props.title;
    let navIsHidden = props.navIsHidden;

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
                    <Link to="/about-us">About Us</Link>
                    <Link to="/logout">Sign Out</Link>
                </nav>
                <header className="header">
                    <h1>{title}</h1>
                </header>
            </div>
        )
    }
}