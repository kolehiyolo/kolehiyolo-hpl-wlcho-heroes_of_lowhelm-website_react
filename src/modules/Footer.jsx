import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-upper">
                <div className="footer-upper-logo">
                    <img src="images/header/1-top-nav-logo.png" alt="Logo"/>
                </div>
                <div className="footer-upper-links">
                    <ul>
                        <li>
                            <a href="news">News</a>
                        </li>
                        <li>
                            <a href="documentation">Documentation</a>
                        </li>
                        <li>
                            <a href="team">Team</a>
                        </li>
                        <li>
                            <a href="">Privacy Notice</a>
                        </li>
                        <li>
                            <a href="">Terms of Service</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-lower">
                <div className="footer-lower-copyright">
                    <p>© 2022 Heroes of Lowhelm. All Rights Reserved</p>
                </div>
                <div className="footer-lower-socials">
                    <a href="#" target="_blank">
                        <img src="images/icons/facebook.svg" alt="" srcSet=""/>
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/icons/twitter.svg" alt="" srcSet=""/>
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/icons/discord.svg" alt="" srcSet=""/>
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/icons/reddit.svg" alt="" srcSet=""/>
                    </a>
                    <a href="#" target="_blank">
                        <img src="images/icons/instagram.svg" alt="" srcSet=""/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;