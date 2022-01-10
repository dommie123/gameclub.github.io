import React from 'react';
import discord_icon from '../assets/discord-link.jpg';
import facebook_icon from '../assets/facebook-page.png';

export default function Footer() {
    return (
        <footer className="footer">
            <p id="fine-print">
                Join us on our socials! 
                <a href="https://discord.gg/4mGvsK8K">
                    <img src={discord_icon} alt="Discord Link" style={{width: "30px", height: "30px", border: "2px solid black", marginLeft: "5px", borderRadius: "5px"}}/>
                </a> 
                <a href="https://www.facebook.com/groups/239500824828607">
                    <img src={facebook_icon} alt="Facebook Link" style={{width: "30px", height: "30px", border: "2px solid black", marginLeft: "5px", borderRadius: "5px"}}/>
                </a>
            </p>
        </footer>
    )
}