import React from 'react';

function Home() {
return (
    <main class="main">
        <div class="wrapper">
            <div class="hero-container">
                <img src="images/home/desktop/1-hero.png" alt="" />
            </div>
            <div class="hero col-3">
                <img src="images/home/desktop/1-hol-logo.png" alt="hol-logo" class="hero-logo" width="473px" height="513px" />
                <img src="images/home/desktop/1-play-button.png" alt="hol-play-button" class="hero-hol-play-button" data-bs-toggle="modal" href="#exampleModalToggle" role="button" />
            </div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/7-3pK_LTDLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="pvp-section">
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-body">
                            <div class="top-right"></div>
                            <div class="top-left"></div>
                            <div class="bottom-right"></div>
                            <div class="bottom-left"></div>
                            <h5 class="card-title">5V5 BATTLES PVE & PVP</h5>
                            <div class="pvp-divider"></div>
                            <p class="card-text">Form up to teams of 5 in various formations to strategically battle your way to Progress Heroes and Equipment, Gain Rewards, and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guild-section">
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-body">
                            <div class="top-right"></div>
                            <div class="top-left"></div>
                            <div class="bottom-right"></div>
                            <div class="bottom-left"></div>
                            <h5 class="card-title">GUILD WARS & GUILD BOSS</h5>
                            <div class="pvp-divider"></div>
                            <p class="card-text">Purchase land and build a Guild castle to start your own guild or join a preexisting one to tackle on various bosses daily and to fight other Guilds to place rankings for rewards!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-body">
                            <div class="top-right"></div>
                            <div class="top-left"></div>
                            <div class="bottom-right"></div>
                            <div class="bottom-left"></div>
                            <h5 class="card-title">GUILD MINES & MINE RAIDING</h5>
                            <div class="pvp-divider"></div>
                            <p class="card-text">Guild leaders may purchase mines for their Guilds and stake units to mine $CAST daily for the Guild. Attack other Guild Mines to steal portions of daily income. An income generation & theft game!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="guild-hero">
                <img src="images/home/desktop/3-hero.png" alt="" />
            </div>
        </div>
        <div class="loan-sytem-section">
            <div class="loan-container">
                <div class="row col-4">
                    <h5 class="loan-header">UNIT LOAN SYSTEM</h5>
                    <p class="card-text">Deposit heroes into a Global Pool for other players to choose from to rent! Earn a portion of the renter’s Stage Rewards!</p>
                </div>
            </div>
        </div>
        <div class="expedition-section">
            <div class="row col-12">
                <h5 class="loan-header">HERO EXPEDITIONS</h5>
                <div class="pvp-divider"></div>
                <p>Send Heroes off on journeys to hunt assets!</p>
            </div>
            <div class="row col-12">
                <div class="col-4 active-image">
                    <img src="images/home/desktop/5-selected-hero.png" alt="" />
                </div>
                <div class="col-4 ative-text">
                    <h5>MULTIPLE EXPEDITIONS AVAILABLE!</h5>
                    <p>From 1 Hour expeditions to monthly expeditions. The longer the expedition, the higher chance at finding more valuables!</p>
                </div>
                <div class="col-4 active-icon">
                    <img src="images/home/desktop/5-selection-hero-1.png" alt="" />
                    <img src="images/home/desktop/5-selection-hero-2.png" alt="" />
                    <img src="images/home/desktop/5-selection-hero-3.png" alt="" />
                    <img src="images/home/desktop/5-selection-hero-4.png" alt="" />
                </div>
            </div>
        </div>
        <div class="purchase-section">
            <img src="images/home/desktop/6-hero-1.png" alt="" />
            <img src="images/home/desktop/6-hero-2.png" alt="" />
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-body">
                            <div class="top-right"></div>
                            <div class="top-left"></div>
                            <div class="bottom-right"></div>
                            <div class="bottom-left"></div>
                            <h5 class="card-title">OWN STAKE OF PREMIUM IN-GAME PURCHASES</h5>
                            <div class="pvp-divider"></div>
                            <p class="card-text">A staking contract on the Zilliqa network will be provided where investors can choose to deposit $HOL to earn shares of dividends from Premium Sales. 60% of all Premium Sales & 5% of all NFT Marketplace sales will be rewarded as dividends to $HOL Stakers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Home;