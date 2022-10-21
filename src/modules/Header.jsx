import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header() {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = "./javascript/header.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <header className="header">
            <div className="header-branding">
                <a href="#">
                    <img src="images/header/1-top-nav-logo.png" alt="Logo" className="d-inline-block align-text-top"/>
                </a>
            </div>
            <div className="header-navigation header-navigation-collapsed-inactive">
                <ul>
                    <li className="header-navigation-item header-navigation-item-home"><a href="/">
                            <p>Home</p>
                        </a></li>
                    <li className="header-navigation-item header-navigation-item-news"><a href="news">
                            <p>News</p>
                        </a></li>
                    <li className="header-navigation-item header-navigation-item-documentation"><a href="documentation">
                            <p>documentation</p>
                        </a></li>
                    <li className="header-navigation-item header-navigation-item-about"><a href="about">
                            <p>About Us</p>
                        </a></li>
                    <li className="header-navigation-item header-navigation-item-socials"><a href="socials">
                            <p>Socials</p>
                        </a></li>
                    <li className="header-navigation-item header-navigation-item-staking"><a href="staking">
                            <p>Staking</p>
                        </a></li>
                </ul>

            </div>
            <div className="header-collapse-btn">
                <button><i className="bi bi-list"></i></button>
            </div>
            <div className="header-account header-account-collapsed-inactive">
                <ul>
                    <li className="header-account-item"><a href="account.php">Account Management</a></li>
                    <li className="header-account-item"><a href="account.php">2FA</a></li>
                    <li className="header-account-item"><a href="account.php">Connect Wallet</a></li>
                    <li className="header-account-item">
                        <form action="#" method="GET">
                            <button type="submit" name="logout">Log Out</button>
                        </form>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;