import React from 'react';
import { useEffect } from "react";

function About() {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = "./javascript/account.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="main">
            <div className="hol-sidebar">
                <div className="hol-sidebar-panel">
                    <div className="logo-container">
                        <img src="images/account/1-hol-logo.png" alt=""/>
                    </div>
                        <ul>
                            <li className="active" id="accManagement">
                                <a href="">Account Management</a>
                            </li>
                            <li id="authentication">
                                <a href="">Two-Factor Authentication</a>
                            </li>
                            <li id="connect-wallet">
                                <a href="">Connect Wallet</a>
                            </li>
                        </ul>
    
                </div>
            </div>
            <section>
                <div className="update-information">
                    <div className="details col-4 show" id="management">
                        <h3>Account Management</h3>
                        <form>
                            <div className="row col-12">
                                <h4>Change Email</h4>
                                <label htmlFor="email">Current Email:</label>
                                <input type="email" placeholder="currentlinked@emailaddress.com"/>
                                <label htmlFor="email">New Email:</label>
                                <input type="email" placeholder="currentlinked@emailaddress.com"/>
                            </div>
                            <div className="row col-12">
                                <h4>Change Username</h4>
                                <label htmlFor="username">Current Username:</label>
                                <input type="text" placeholder="Herooflowhelm"/>

                                <label htmlFor="username">New username:</label>
                                <input type="text" placeholder="Herooflowhelm"/>
                            </div>
                            <div className="row col-12">
                                <h4>Change Password</h4>
                                <label htmlFor="username">Current Password:</label>
                                <input type="text" placeholder="Herooflowhelm"/>
                                <label htmlFor="username">New Password:</label>
                                <input type="text" placeholder="Herooflowhelm"/>
                            </div>
                            <div className="row col-12 pribtn">
                                <button name="stake" type="button" className="btn-stake btn_connect" id="claim_reward">SAVE</button>
                            </div>
                        </form>
                    </div>
                    <div className="details col-4 next-wt hide" id="setup">
                        <h3>Setup 2Fa</h3>
                        <form>
                            <div className="row col-12">
                                <div className="step">
                                    <div className="count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                        </svg>
                                    </div>
                                    <div className="count-text">
                                        <span>open the authenticator app on your phone (e.g.Google Authenticator) and scan the following</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-12">
                                <img src="images/account/qrcode.png" alt="" className="qr-code"/>
                            </div>
                            <div className="row col-12">
                                <div className="step next-step">
                                    <div className="count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-2-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                                        </svg>
                                        <span>Enter 2FA Code</span>
                                    </div>
                                    <div className="Facode">
                                        <div className="digit-code">
                                            <div className="last-input-hover"></div>
                                            <input type="text" maxLength="6" autoFocus="autofocus" aria-label="Enter the code generated by your authentication app" className="form-masked-pin"/>
                                            <div className="bg-box-group">
                                            <div className="bg-box"></div>
                                            <div className="bg-box"></div>
                                            <div className="bg-box"></div>
                                            <div className="bg-box"></div>
                                            <div className="bg-box"></div>
                                            <div className="bg-box"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-12 pribtn">
                                <button name="stake" type="button" className="btn-stake btn_connect" id="claim_reward">SAVE</button>
                            </div>
                        </form>
                    </div>
                    <div className="details col-4 hide" id="wallet">
                        <h3>Connect Wallet</h3>
                        <form>
                            <div className="row col-12">
                                <input type="text" className="zilpay" placeholder="currentlinked@emailaddress.com"/>
                                <input type="text" className="metamask" placeholder="currentlinked@emailaddress.com"/>
                                <input type="text" className="metamask" placeholder="currentlinked@emailaddress.com"/>
                                <input type="text" className="metamask" placeholder="currentlinked@emailaddress.com"/>
                                <span>Warning: You may connect 1 wallet addres from each network and cannot be freely changed after.</span>
                                <h4>Current 2FA Code must be entered before pressing SAVE</h4>
                                <input type="text" className="transparent-code" placeholder="2FA CODE:"/>
                            </div>
                            <div className="row col-12 pribtn">
                                <button name="stake" type="button" className="btn-stake btn_connect" id="claim_reward">SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;