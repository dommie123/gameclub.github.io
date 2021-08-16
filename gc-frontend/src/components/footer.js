import React from 'react';
import icon from '../assets/discord-link.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <p id="fine-print">Join us on our socials! <a href="https://discord.gg/4mGvsK8K"><img src={icon} alt="Discord Link" style={{width: "30px", height: "30px", border: "2px solid black", borderRadius: "5px"}}/></a></p>
        </footer>
    )
}