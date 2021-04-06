import React from 'react';

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
                <header className="header">
                    <h1>{title}</h1>
                </header>
                <nav className="nav">
                    {/* TOOD add links to custom components */}
                </nav>
            </div>
        )
    }
}