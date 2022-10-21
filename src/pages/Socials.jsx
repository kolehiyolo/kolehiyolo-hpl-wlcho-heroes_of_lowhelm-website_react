import React from 'react';

function Socials() {
    return (
        <main className="main">
            <section className="hero-section">
                <div className="container">
                    <div className="wrapper">
                        <div className="row col-12">
                            <h1>Our Socials</h1>
                            <p>
                                @HeroesOfLowhelm
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="social-media">
                    <div className="container col">
                        <div className="icon-container">
                            <a href="https://www.heroesoflowhelm.com/">
                                <img src="images/social/Website-link.png" alt="Website-link"/>
                                <h3>WEBSITE</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://twitter.com/HLowhelm">
                                <img src="images/social/Twitter.png" alt="twitter"/>
                                <h3>twitter</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://www.facebook.com/HeroesofLowhelm">
                                <img src="images/social/Facebook.png" alt="facebook"/>
                                <h3>facebook</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://www.instagram.com/hlowhelm/">
                                <img src="images/social/Instagram.png" alt="instagram"/>
                                <h3>instagram</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://t.me/heroesoflowhelm_ann">
                                <img src="images/social/Telegram.png" alt="telegram"/>
                                <h3>telegram announcement</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://t.me/heroesoflowhelm">
                                <img src="images/social/Telegram-chat.png" alt="Telegram-chat"/>
                                <h3>telegram chat</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://dsc.gg/heroesoflowhelm">
                                <img src="images/social/Discord.png" alt="discord"/>
                                <h3>discord</h3>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="https://github.com/Heroes-of-Lowhelm">
                                <img src="images/social/Github.png" alt="github"/>
                                <h3>github</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Socials;