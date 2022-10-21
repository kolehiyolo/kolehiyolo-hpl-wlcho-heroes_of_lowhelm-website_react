import React from 'react';
import { useEffect } from "react";

function About() {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = "./javascript/about.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="main">
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' />
            <section className="hero-section">
                <div className="container">
                    <div className="wrapper">
                        <div className="row col-6 team-hero-context">
                            <h1>TEAM</h1>
                            <div className="team-divider"></div>
                            <p>
                                Heroes of Lowhelm were founded by William Cho with significant help from Blockchain Andy. William and Andy have formed the necessary team to bring the vision, a reality. The team also consists of Ron Privado and Melanie…
                            </p>
                            <a title="Login/Register" className="hol-read-more" id="read_more">VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="foundation">
                <div className="team-foundation">
                    <div className="row col-5">
                        <div className="hero-container">
                            <img src="images/about/HOL-characters.png" alt="" />
                        </div>
                    </div>
                    <div className="row col-7 team-context">
                        <h5>HEROES OF LOWHELM – The Foundation</h5>
                        <p>The foundation of Heroes of Lowhelm was created not just by the core team, but by the community as well. In Q4 of 2021, HOL presented concept artwork made by freelancers to the Zilliqa community with the idea of creating a JRPG Video Game using these units. By running a small fundraiser to the community by whitelisting, the project was able to get enough funding to kick start the development of the video game! The core team initially had plans to hire individuals to create all the artwork & animations to supply a game studio for development, however that did not turn out so well when it was difficult to find high-end artists & animators. We had to find professional studios for everything. We’ve came across a studio whose done work for big brands and names, but we ultimately decided not to work with them because they had zero experience in our style of artwork and believed it to be a huge risk factor. Thankfully, we’ve found HPL Game Corporation & Definite Studios which were very excited to collaborate to build Heroes of Lowhelm. We were quickly able to settle on our own style of artwork & animations and began steam production. While the studios are busy with the video game, the team continues to keep the community well-informed. So far, everyone is very stoked to bringing a mere vision, a reality!</p>
                    </div>
                </div>
            </section>
            <section className="team-members">
                <div className="hol-carousel">
                    <div className="carousel-container">
                        <h5>Core Members</h5>
                        <div className="owl-carousel">
                            <div className="image-container profile-1">
                                <div className="profile">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-right"></div>
                                    <div className="bottom-left"></div>
                                    <img src="images/about/person-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-2">
                                <div>
                                    <img src="images/about/person-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-3">
                                <div>
                                    <img src="images/about/person-3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-4">
                                <div>
                                    <img src="images/about/person-4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-5">
                                <div>
                                    <img src="images/about/person-5.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-6">
                                <div>
                                    <img src="images/about/person-6.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-7">
                                <div>
                                    <img src="images/about/person-7.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-8">
                                <div>
                                    <img src="images/about/person-8.jpg" alt="" />
                                </div>
                            </div>
                            <div className="image-container profile-9">
                                <div>
                                    <img src="images/about/person-9.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-person-details">
                    <div className="carousel-description">
                        <p className="carousel-description-name">William Cho</p>
                        <p className="carousel-description-position">Co-Founder/Product Manager</p>
                        <p className="carousel-description-desc">Someone who's addicted to cryptocurrencies and as an experienced in both Free2Play & Pay2Win mobile gamer, William aims to combine both his experiences and addiction together to deliver fun cryptocurrency mobile games to the public. Creating mobile games from scratch has always been on his bucket list. Previously, founded and managed</p>
                    </div>
                </div>
                <div className="team-member-container">
                    <h1>TEAM MEMBERS</h1>
                    <div className="team-collection col-9">
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Ana Smith</h3>
                                <p>Project Manager</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Van Johnson</h3>
                                <p>Game Developer</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Aya Williams</h3>
                                <p>game UI/UX Designer</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Mike Miller</h3>
                                <p>Web Designer</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Kanae Miller</h3>
                                <p>Team Lead</p>
                            </a>
                        </div>


                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Leo Davis</h3>
                                <p>Web Developer</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Hyun-Ae</h3>
                                <p>Ios Developer</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>John Garcia</h3>
                                <p>3D Artist</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>Yun Hee</h3>
                                <p>Social Media Manager</p>
                            </a>
                        </div>
                        <div className="icon-container">
                            <a href="#">
                                <img src="images/social/Website-link.png" alt="Website-link" />
                                <h3>John Doe</h3>
                                <p>Game UI/UX Designer</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-8 paging">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link active" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;