import React from 'react';
import { useEffect } from "react";

function Documentation() {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = "./javascript/documentation.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="main">
            <section id="main-introduction" className="main-introduction">
                <h2>Introduction</h2>
                <hr/>
                <div className="main-introduction-body">
                    <p>Heroes of Lowhelm is an amazing fantasy 2D anime turn-based JRPG mobile game built on the Zilliqa Blockchain incentivizing a Play and Earn environment for the Players and to share a portion of the Premium Asset Sales to Investors</p>
                    <p>Almost all traditional mobile games do not give ownership of assets purchased from the game to their PLayers. More often than not, Players would be trying to sell off their Accounts to others off market. This would bring about the "Ban Hammer" effectively ending in a lose lose situation for those involved.</p>
                    <p>In Heroes of Lowhelm, Players will be able to own the Assets, be it Heroes (Characters) or Equipment as NFTs. They will have the ability to buy, sell or trade their Assets via the In-Game Marketplace that will be launched with the Game itself. Hence, Heroes of Lowhelm will allow Players to live out their JRPG dereams with amazing graphics, story and even allow them to earn whilst playing!</p>
                    <p>Furthermore, thanks to Blockchain and the new era of Blockchain Gaming, We are now able to offer Investors a portion of the Premium Asset Sales. This is an option for an Investor who is not a gamer but wishes to invest in Heroes of Lowhelm. An Investor would simply stake $HOL to earn dividends from the Premium Asset Sales</p>
                </div>
                <button className="main-introduction-more">Read More</button>
            </section>
            <section id="main-story" className="main-story">
                <h2>Story</h2>
                <hr/>
                <div className="main-story-body">
                    <h3>Planet Lowhelm, 3000 AD</h3>
                    <p>Throughout its history, civilizations have learnt to harness, wield and master the different forces of element energy and gave rise to The Five Kingdoms.</p>
                    <ul>
                        <li><span>Valia</span>, rules over the power of the forest.</li>
                        <li><span>Kurt</span>, wielders of burning Fire.</li>
                        <li><span>Napia</span>, the Water spirits.</li>
                        <li><span>Dragon</span>, quintessence of Light.</li>
                        <li><span>Elysium</span>, masters of the Dark arts.</li>
                    </ul>
                    <p>For the past 300 years, The Five Kingdoms have forged a strong alliance with one other, maintained peace and a time of great prosperity. Until they came.</p>
                    <p>An invasive alien species from the Planet Xautania, known as the Murins, descended upon Lowhelm, ripping through The Five Kingdoms leaving only destruction and bloodshed in its wake. For those that were lucky enough to survive, vengeance burns in their hearts. One of them is Calix, a common knight of Kura. This is where the story begins, to gather the remaining survivors, do battle and take back The Five Kingdoms of Lowhelm from the Murins and rise as Heroes of Lowhelm!</p>
                </div>
                <button className="main-story-more">Read More</button>
            </section>
            <section id="main-assets" className="main-assets">
                <h2>Assets</h2>
                <hr/>
                <div className="main-assets-body">
                    <p>Herein lies the overall structure of Assets and its related information within Heroes of Lowhelm, how can a Player fully maximize them and what can they look forward to.</p>
                    <div id="main-assets-body-heroes" className="main-assets-body-heroes">
                        <h3>Heroes</h3>
                        <img src="images/documentation/HOL-Hero-Home-Screen-v4-screenshot.png" alt=""/>
                        <p>Each Hero has their own Natural Star Grade, Element, className, Base Stats, Skills and Lore. Furthermore, all 3 Heroes and higher will come with their own Leader Ability! Players will need to collect and strengthen their Heroes, explore to upgrade Equipment and strategize to tackle the full breadth of content that Heroes of Lowhelm offer and all of the challenges that awaits!</p>
                    </div>
                    <div id="main-assets-body-elements" className="main-assets-body-elements">
                        <h3>Elements</h3>
                        <p>There are 5 elements in Heroes of Lowhelm, each having an advantage, disadvantage or neutrality over another, They are Fire, Water, Forest, Light and Dark.</p>
                        <img src="images/documentation/elements-flowchart.png" alt=""/>
                        <p>A Hero with the Fire Element will do more damage to a Hero with the Forest Element. Whereas the same Hero with the Fire Element will do less damage and receive more damage from a Hero with the Water Element. Hero with the Light Element will deal more damage and receive more damage from a Hero with the Dark Element. However Fire, Forest and Water Element will do neutral (normal) damage to Light and Dark Element.</p>
                    </div>
                    <div id="main-assets-body-natural_star_grade" className="main-assets-body-natural_star_grade">
                        <h3>Natural Star Grade</h3>
                        <p>All Heroes come with various Natural Star Grade ranging from 1* to 5* and they can be evolved to a maximum achievable Star Grade of 6*. Each Star Grade allows a Hero to gain more levels.</p>
                        <p>For example, a 1* Hero can achieve a maximum level of 10, a 2* Hero can level up to 20 and a maximum 6* Hero can push the leveling to 60. A Player can gain more levels for their Heroes by engaging in the PVE. Adventure Mode or by feeding them Hero EXP Potions. Once a Herohas reached the maximum level cap based on their Star Grade, the Hero can then evolve to the next higher Star Grade.</p>
                        <ul>
                            <li className="list-title">Here is what a Player will need for each Star Grade Evolution:</li>
                            <li>A Duplicate Hero of the same Star Grade</li>
                            <li>Element Stones</li>
                            <li>Payment using $CAST</li>
                        </ul>
                        <p>If you have a 5* Calix and have reached Level 50, you will be required to have a Duplicate 5* Calix (max level not required for Duplicate) to proceed with the evolution. Each Star Grade Evolution will require a specific Grade of Element Stones in accordance to the Hero Element and current Star Grade. These can be acquired via the Element Stone Dungeon [link to Element Stone Dungeon]. Once the Evolution is done, you will have a 6* Calix at Level 1!</p>
                    </div>
                    <div id="main-assets-body-hero_base_stats_and_skills" className="main-assets-body-hero_base_stats_and_skills">
                        <h3>Hero Base Stats and Skills</h3>
                        <p>The Base Stats includes Attack, Defense, Hitpoints, Speed, Critical Hit Rate, Critical Hit Damage, Resistance and Accuracy. The Base Stats for Attack, Defense and Hitpoints will increase with higher Star Grade and scaled accordingly with Hero Levels. All Heroes upon Summoning [link to Summoning section] will have a 1% chance of acquiring a Chaotic Trait that adds a permanent 5% boost to Attack, Defense and Hitpoints. Players can also infuse a Chaotic Trait to their Heroes (so long as the Hero does not have a Chaotic Trait) via the Chaotic Fusion Chamber [link to The Bazaar]!</p>
                        <p>Every Hero will have access to 4 Abilities: Passive, Regular Attack, Regular Skill and Ultimate Skill. Each of the Abilities have a maximum level and can be upgraded using a Duplicate Hero (does not need to be the same Star Grade) and an Element Stone (rarity and type dependent on Skill Level) acquired via the Element Stone Dungeon [link to Element Stone Dungeon].</p>
                    </div>
                    <div id="main-assets-body-equipment" className="main-assets-body-equipment">
                        <h3>Equipment</h3>
                        <p>Each Hero can equip up to 6 pieces of Equipment: Head, Body, Boots, Weapon Necklace and Ring Equipment.</p>
                        <img src="images/documentation/HOL-Hero-Inventory-Screen-v4-screenshot.png" alt=""/>
                        <p>Each piece of Equipment has its own Natural Star Grade similar to Heroes, ranging from 1* to 5* and can be fully evolved to 6*. Each Equipment is className specific and draws on its own pool of substats chosen randomly upon Summoning (higher Star Grade will have more substats) [link to Summoning section] along with an Attack Rating and Level. All Equipment upon Summoning [link to Summoning section] will have a 1% chance of acquiring a Chaotic Trait that adds an additional random substat to the Equipment.</p>
                        <p>Equipment with Natural Star Grade of 5 comes with a random Set ability. Once the required Set requirement is fulfilled, it will provide a boost to the Base Stat(s) of the Hero equipping it.</p>
                        <div className="main-assets-body-equipment-grid">
                            <div className="main-assets-body-equipment-grid-item-1"></div>
                            <div className="main-assets-body-equipment-grid-item-2">
                                <h4>Main Stat(s)</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-3">
                                <h4>Sub Stats</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-4">
                                <h4>Weapon</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-5">
                                <p>Attack</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-6">
                                <p>Attack Hitpoints Hitpoints%</p>
                                <p>Speed Crit Rate Crit DMG</p>
                                <p>Accuracy Resistance</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-7">
                                <h4>Head</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-8">
                                <p>Hitpoints</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-9">
                                <p>Attack Attack% Hitpoints Hitpoint%</p>
                                <p>Defense Defense% Speed Crit Rate</p>
                                <p>Crit DMG Accuracy Resistance</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-10">
                                <h4>Body</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-11">
                                <p>Defense</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-12">
                                <p>Hitpoints Hitpoint% Defense% Speed</p>
                                <p>Crit Rate Crit DMG Accuracy Resistance</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-13">
                                <h4>Necklace</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-14">
                                <p>Crit Rate Crit DMG Defense</p>
                                <p>Attack Attack% Defense%</p>
                                <p>Hitpoints Hitpoints%</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-15">
                                <p>Every Stat Possible</p>
                                <p>Excluding the Main Stat</p>
                                <p>Drawn From Pool.</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-16">
                                <h4>Ring</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-17">
                                <p>Accuracy Resistance Attack</p>
                                <p>Attack% Defense Defense%</p>
                                <p>Hitpoints Hitpoints%</p>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-18">
                                <h4>Boots</h4>
                            </div>
                            <div className="main-assets-body-equipment-grid-item-19">
                                <p>Speed Attack Attack% Hitpoints</p>
                                <p>Hitpoints% Defense Defense%</p>
                            </div>
                        </div>
                    </div>
                    <div id="main-assets-body-summoning" className="main-assets-body-summoning">
                        <h3>Summoning</h3>
                        <h4>(Minting)</h4>
                        <p>In Heroes of Lowhelm, players can draw from 5 distinct Pools either via a Single Pull or a 10 Pull payable in 3 ways:</p>
                        <div className="main-assets-body-summoning-grid">
                            <div>
                                <p>Common Hero Summons</p>
                                <p>* (Forest, Fire and Water Elements)</p>
                            </div>
                            <div>
                                <p>Premium Hero Summons</p>
                                <p>* (Forest, Fire and Water Elements)</p>
                            </div>
                            <div>
                                <p>Special Hero Summons</p>
                                <p>* (Light and Dark Elements)</p>
                            </div>
                            <div>
                                <p>Common Equipment Summons</p>
                            </div>
                            <div>
                                <p>Premium Equipment Summons</p>
                            </div>
                        </div>
                        <img src="images/documentation/HOL-Summon-v2-screenshot.png" alt=""/>
                        <p>Common Summons (Hero or Equipment) utilizes the $CAST token as payment and Players will acquire 1 or 10 1* to 3* Assets accordingly. For a 10 Pull, Players are guaranteed to acquire at least 1 3* Asset.</p>
                        <p>Premium Summons (Hero or Equipment) utilizes the $HOL token as payment and Players will acquire 1 or 10 3* to 5* Assets accordingly. For a 10 Pull, Players are guaranteed to acquire at least 1 4* Asset.</p>
                    </div>
                    <div id="main-assets-body-summoning_preparation" className="main-assets-body-summoning_preparation">
                        <h3>Summoning Preparation</h3>
                        <p>Whenever a Player summons an Asset(s), be it a Hero or Equipment, there will be a cooldown on that Asset(s) (Hero or Equipment) known as Summon Preparation.</p>
                        <img src="images/documentation/HOL-Hero-Inventory-Screen-v4-for-web-screenshot.png" alt=""/>
                        <p>Players will have to take note that during that Summon Preparation, the Asset(s) summoned (Hero or Equipment) cannot be utilized in any way such as Evolution, Transferor Disintegration. This is due to the Asset(S) being tokenized onto the Zilliqa Blockchain.</p>
                    </div>
                    <div id="main-assets-body-guilds_and_lands" className="main-assets-body-guilds_and_lands">
                        <h3>Guilds and Lands</h3>
                        <p>Players can come together to form Guilds of up to 30 members in Heroes of Lowhelm. It is a requirement for the Guild Leader to purchase a Guild Castle using $HOL, once that is done then Players of the Guild (also known as Guild Members) will have access to Guild Activities such as Guild Boss, Guild Mines and Guild Wars. Once in a Guild, Players will be able to acquire Guild Coins and help the Guild to earn Guild Points. Guild Coins are for Players to purchase goods in The Bazaar Guild Shop [link to the Bazaar].</p>
                        <p>Guild Members who complete all Daily Quests will acquire Guild Points and Guild Experience for their Guild. Players can also donate $HOL and $Cast (subjected to daily limits) to help their Guild gain more Guild Experience and Guild Points. As the Guild gains levels, the Guild Castle will expanded grow to unlock more options such as building more Mines.</p>
                        <p>The Guild Leader can then utilize Guild Points to either add a Buff to all Guild Members or build Guild Mines. The Guild Leader can purchase Attack, Defense and /or Hitpoints Buffs for all Guild Members. The higher the level of the Buff, the higher the Guild Points cost it will be to purchase. These Buffs are permanent for all Guild Members (except for PVP Arena) until they leave the Guild. From the Map, the Guild Leader can spend $HOLto build a Guild Mine and fortify the Mine with up to 2 Defensive Turrets on any unoccupied spot. Guild Mines will generate a fixed amount of $CAST on a daily basis based on the total number of Defenders deployed to the Guild Mine. $CAST will be calculated and awarded to Guilds after Server Refresh.</p>
                    </div>
                </div>
                <button className="main-assets-more">Read More</button>
            </section>
            <section id="main-gameplay" className="main-gameplay">
                <h2>Gameplay</h2>
                <hr/>
                <p>There are many different Modes of Gameplay found within Heroes of Lowhelm, read on further to find out more! Daily Server Refresh will be 12am PST (UTC +8).</p>
                <div className="main-gameplay-body">
                    <div id="main-gameplay-body-pve_adventure_mode" className="main-gameplay-body-pve_adventure_mode">
                        <h3>PVE Adventure Mode</h3>
                        <p>Adventure Mode is where the story will unfold and Players will begin with their Player Account at Level 1. There will be 10 Chapters with 12 stages each at launch for Players to explore, battle and conquer. Stage Battles will consume Stamina and at Player Account level 1, a Player will begin with 20 Stamina. Stamina will be regenerating at 2 stamina per 15 minutes. Completing stages with no death will offer a 3* achievement and the full rewards including:</p>
                        <ul>
                            <li>Player Account Level gaining Experience</li>
                            <li>Heroes deployed gaining Experience</li>
                            <li>$CAST</li>
                        </ul>
                        <p>And also a chance to acquire the following:</p>
                        <ul>
                            <li>Hero EXP Potion</li>
                            <li>Equipment EXP Potion</li>
                            <li>Stamina Potion</li>
                            <li>Stamina</li>
                            <li>Soul Fragments (at higher Stages)</li>
                            <li>Precious Metals (at higher Stages</li>
                        </ul>
                        <img src="images/documentation/HOL-Stage-completion-popup-v3-screenshot.png" alt=""/>
                    </div>
                    <div id="main-gameplay-body-combat" className="main-gameplay-body-combat">
                        <h3>Combat</h3>
                        <p>Heroes of Lowhelm is a turn-based JRPG that allows a Player to utilize up to 5 Heroes to do battle against the Murins and much much more. There are myriad of aspects to combat to consider prior to deploying your Heroes.</p>
                        <p>For example, Speed of each Heroes and Enemies. Speed is the determining factor of who begins the turn first. If in a situation where both teams have the same speed, then it would be randomized between them.</p>
                        <p>Team composition and Synergy plays a big role as well. Would a Player value Speedy Heroes boosted by other Heroes that would augment their abilities and go for an all out attack? Would they employ a more defensive route? Or would a team of specialized Area of Effect Heroes blasting Enemies from behind a beefy Hero Warrior be best?</p>
                        <img src="images/documentation/HOL-in-game-v1-screenshot.png" alt=""/>
                    </div>
                    <div id="main-gameplay-body-pvp_arena" className="main-gameplay-body-pvp_arena">
                        <h3>PVP Arena</h3>
                        <p>The PVP Arena is where Players compete with one another for dominance in the Weekly Rankings to acquire rewards such $HOL and $CAST. Players will get 5 Arena Tickets daily and regardless of how many Tickets are left, it will replenish to a maximum amount of 5 the next day. Players can also choose to spend their $HOL to replenish 5 additional Tickets should their daily 5 Tickets have been used up. The only exception to the 5 maximum Ticket rule per day is if a Player chooses to spend $HOL for additional Tickets.</p>
                        <p>Players will be able to set a Defensive Team and an Offensive Team. Should the Player be attacked, the Defensive Team will be deployed. The Player will gain or lose a small amount of points depending if the Defensive Team wins or loses.</p>
                        <p>To attack other, the Player will be given a list of similarity ranked Opponents to choose from. For the Offensive Team Battles, the amount of points gained or lost will be more than the Defensive Team Battles.</p>
                        <p>In addition to gaining more points, every Offensive Team Battles won will award the Player with 1 Arena Coin that the Player can utilize in the Arena Shop in The Bazaar [link to The Bazaar]. These Arena Coins are bound to each account and are non-transferable.</p>
                    </div>
                    <div id="main-gameplay-body-element_stone_dungeon" className="main-gameplay-body-element_stone_dungeon">
                        <h3>Element Stone Dungeon</h3>
                        <p>Element Stones are an essential ingredient to Evolve Heroes or Upgrade their Skills. The Element Stone Dungeon will offer 5 different dungeons with 12 stages each (1 for each Element). Each day, 2 different Dungeons will be unlocked and on Sunday, all of the Dungeons will be available to the Player. Higher stages will be a challenge but will yield higher Grades of Element Stones. Players will expend Stamina per entry into the Element Stone Dungeon.</p>
                    </div>
                    <div id="main-gameplay-body-tower_of_lowhelm" className="main-gameplay-body-tower_of_lowhelm">
                        <h3>Tower of Lowhelm</h3>
                        <p>Once a shining beacon of technological advancement and a symbol of peace, now danger lurks on every floor. The Tower of Lowhelm will test a Player’s resolve and mettle, offering 100 floors to battle, each increasing in difficulty. Will you, the Player, be able to overcome all the challenges?</p>
                        <p>The Tower of Lowhelm is a month-long ordeal and will reset every month. Each floor will require Players to expend their Stamina.</p>
                    </div>
                    <div id="main-gameplay-body-guild_wars" className="main-gameplay-body-guild_wars">
                        <h3>Guild Wars</h3>
                    </div>
                    <div id="main-gameplay-body-world_boss" className="main-gameplay-body-world_boss">
                        <h3>World Boss</h3>
                        <p>There will be a different World Boss summoned each day for Players to participate in. Players will be given 2 Work Boss Tickets daily to do as much damage as they can. Points are calculated based on the total damage done daily and Players will be ranked accordingly. The higher the rank acquired, the more $HOL and $CAST to be won!</p>
                        <p>Rewards are issued on a daily basis. For the more competitive Players, additional World Boss Tickets can be purchased by spending $HOL.</p>
                    </div>
                    <div id="main-gameplay-body-mine_raids" className="main-gameplay-body-mine_raids">
                        <h3>Mine Raids</h3>
                        <p>Once a Guild Mine has been built, Guild Members will have access to earn $CAST daily. As mentioned in Guilds and Lands, Guild Mines will generate a fixed amount of $CAST on a daily basis based on the total number of Defenders deployed in the Guild Mine. Thus, if no Defenders have been deployed then the Guild Mine will not generate and $CAST. Each Guild Mine has 10 Defensive slots consisting of 3 Heroes in a Team and 2 slots for Turrets which a Guild Leader can choose to purchase to fortify the Guild Mines. Each Guild Member may choose to deploy a Hero as a Defender into each Guild Mine the Guild has. Once deployed, that Hero will be locked from being used in other modes of Heroes of Lowhelm until that Hero is undeployed (think of it as staking a Hero to earn $CAST).</p>
                        <p>In addition to the $CAST generated by each Guild Mine, Guild Members can strategize and attack other Guild Mines. Every Guild Member will be given 2 plundering attempts daily, from a List, Guild Members will be able to choose other Guild Mines and will be able to see how many Defenders the Mine has and how many Turrets deployed. A particular Guild Mine can be plundered as many times as possible until all 10 of its Defensive Teams have been eliminated. Once all 10 of its Defensive Teams have been eliminated, that Guild Mine will be totaled to Plunder, it will only generate 50% of its total $CAST daily and cannot be further plundered.</p>
                        <p>To begin a plunder attempt, Guild Members can deploy 3 available Heroes they have (hence if a Hero is Defending a Mine or out on Expedition then those they cannot deploy). Formation for a Mine Raid is always 1 Hero in front and 2 Heroes in the back. If the targeted Guild Mine has turret fortifications, then the turrets will join the battle and attack once every 4 turns and turrets themselves cannot be targeted.</p>
                        <p>A successful plunder means all 3 Heroes in the Defending Team have been eliminated. Each successful plunder will result in stealing 5% of the daily $CAST generation of the targeted Guild Mine. If a Guild Member uses up a plunder attempt without defeating all 3 Heroes in the Defending Team, the Guild Member can choose to spend another plunder attempt to try again. For all attempts, regardless of how many were defeated, so long as 1 Hero in the Defending Team survives, the whole team will be revived to defend the Guild Mine.</p>
                        <p>Turrets are disabled based on how many heroes of the Defending Team have been defeated. For instance, if the targeted Guild Mine has 2 Turrets and the Guild Member only managed to defeat 1 Hero of the Defending Team, then the ext attempt on that Defending Team will have 3 Heroes and 1 Turret. To illustrate this:</p>
                        <div className="main-gameplay-body-mine_raids-grid">
                            <div className="main-gameplay-body-mine_raids-grid-item-1">
                                <p>Targetted Guild Mine has 2 Turrets</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-2">
                                <p>1st Attempt</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-3">
                                <p>Next Attempt</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-4">
                                <p>3 Heroes in Defending Team and 2 Turrets.</p>
                                <p>1 Hero defeated in attempt.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-5">
                                <p>3 Heroes in Defending Team and 1 Turret.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-6">
                                <p>3 Heroes in Defending Team and 2 Turrets.</p>
                                <p>2 Heroes defeated in attempt.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-7">
                                <p>3 Heroes in Defending Team, no Turrets.</p>
                                <p>Turrets will reactivate after Server Refresh.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-8">
                                <p>3 Heroes in Defending Team and 2 Turrets.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-9">
                                <p>Team has been defeated and cannot be further engaged.</p>
                                <p>Mine loses 5% of daily CAST generation.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-10">
                                <p>All Heroes defeated. Guild Member steals 5% of daily CAST generation of the targeted Guild Mine for their own Guild.</p>
                            </div>
                            <div className="main-gameplay-body-mine_raids-grid-item-11">
                                <p>Turrets will reactivate after Server Refresh.</p>
                            </div>
                        </div>
                        <p className="main-gameplay-body-mine_raids-note"><span>Note:</span> Players may choose to spend $CAST to refresh Expeditions should they want to try to get. Higher Expedition Tiers. Alternatively, a Player can just wait for the Daily Server Refresh to get a new set of Expeditions. Heroes dispatched on Expeditions may not be deployed in the other Modes of Heroes of Lowhelm until the Expedition is completed.</p>
                    </div>
                </div>
            </section>
            <section id="main-additional_features" className="main-additional_features">
                <h2>Additional Features</h2>
                <hr/>
                <p>In Heroes of Lowhelm, there will be Additional Game Features at Launch that a Player would want to take advantage of:</p>
                <div className="main-additional_features-body">
                    <div id="main-additional_features-body-hero_expeditions" className="main-additional_features-body-hero_expeditions">
                        <h3>Hero Expeditions</h3>
                        <h4>(Hero Staking)</h4>
                        <p>Have additional Heroes to spare? Players can utilize those to dispatch on Expeditions to explore and hunt for treasures and other rewards! Multiple Expeditions with different journeys unlock as the Player’s Account Levels up.</p>
                        <img src="images/documentation/Stage-completion-popup-v3-screenshot.png" alt=""/>
                        <p>Each Expedition will have its own set of requirements that will need to be fulfilled before the Player is allowed to dispatch such as Hero Level, Battle Power, All Dark Heroes, All Warriors, 4* Heroes or any other combinations as an example. Expeditions will also have different time requirements for dispatch such as 12 hours, 24 hours or 1 week just to name a few. The longer an Expedition takes, the more rewards the Player will receive.</p>
                        <p>Expeditions come with its own randomized Grade of difficulty. Higher Expedition Grades will have higher requirements but will yield more rewards!</p>
                        <img src="images/documentation/expedition-colored-screenshot.png" alt=""/>
                        <p>Rewards from Expeditions may include the following:</p>
                        <ul>
                            <li>$CAST</li>
                            <li>$HOL</li>
                            <li>Hero EXP Potion</li>
                            <li>Equipment EXP Potion</li>
                            <li>Stamina Potion</li>
                            <li>Random Element Stones</li>
                            <li>Soul Fragments</li>
                            <li>Precious Metals</li>
                            <li>Equipment</li>
                        </ul>
                        <p className="main-additional_features-body-hero_expeditions-note">Note: Players may choose to spend $CAST to refresh Expeditions should they want to try to get higher Expedition Tiers. Alternatively, a Player can just wait for the Daily Server Refresh to get a new set of Expeditions. Heroes dispatched on Expeditions may not be deployed in the other Modes of Heroes of Lowhelm until the Expedition is completed.</p>
                    </div>
                    <div id="main-additional_features-body-hero_loans" className="main-additional_features-body-hero_loans">
                        <h3>Hero Loans</h3>
                        <p>If a Player gets stuck at certain Stages of the PVE Adventure Mode, normally the Player would be advised to “grind” and Level up the Heroes which may take some time to do. In Heroes of Lowhelm, the Players can also take advantage of the Hero Loans System. The Hero Loans System will allow the Player to select 1 Hero to join their adventure from a global pool of Heroes that have been added to it. Here’s how it works:</p>
                        <img src="images/documentation/HOL-Stage-Preparation-v3-screenshot.png" alt=""/>
                        <p>Loaning Heroes: During the Stage Preparation screen of the PVE Story Mode, the Player can click on the Unit Loan Button in the bottom left hand corner. This will give a pop up showcasing all of the available Heroes within the Hero Loan System to select from. The selected Loaned Hero can then be added to the Stage to battle alongside the Player’s Team and will take up 1 of the Team Slots. The Player loaning a Hero can only loan 1 Hero per stage and 50% of the Stage Rewards will be shared with the Player of the Loaned Hero.</p>
                        <p>Loaning Out Heroes: The Player can choose to loan out as many Heroes as they want to. Heroes being loaned out will be locked and cannot be used in other Modes of Heroes of Lowhelm until the Heroes return. Should a Player need to utilize a Hero that has been added to the Hero Loan System, they can always cancel the loan at any time.</p>
                        <p>Each Hero in the Hero Loan System can participate in up to 10 successful loan deployments in the PVE Story Mode (if a Hero is on loan but the Stage ends in failure, it does not count towards the 10 loan deployment limit). Once the Hero has participated in 10 successful loan deployments, that Hero can no longer be loaned out and will be returned to the Player. Loan deployment limits will reset with the Daily Server Refresh.</p>
                    </div>
                    <div id="main-additional_features-body-the_bazaar" className="main-additional_features-body-the_bazaar">
                        <h3>The Bazaar</h3>
                        <p>If a Player gets stuck at certain Stages of the PVE Adventure Mode, normally the Player would be advised to “grind” and Level up the Heroes which may take some time to do. In Heroes of Lowhelm, the Players can also take advantage of the Hero Loans System. The Hero Loans System will allow the Player to select 1 Hero to join their adventure from a global pool of Heroes that have been added to it. Here’s how it works:</p>
                        <img src="images/documentation/HOL-In-game-The-Bazaar-screenshot.png" alt=""/>
                        <ul>
                            <li>
                                <p>Common Shop</p>
                                <ul>
                                    <li>Hero EXP Pots, Equipment EXP Pots, Stam Pots using $CAST</li>
                                </ul>
                            </li>
                            <li>
                                <p>Arena Shop</p>
                                <ul>
                                    <li>Spend Arena Coins for Premium and Common Goods</li>
                                </ul>
                            </li>
                            <li>
                                <p>Guild Shop</p>
                                <ul>
                                    <li>Spend Guild Coins for Goods</li>
                                </ul>
                            </li>
                            <li>
                                <p>IGM</p>
                                <ul>
                                    <li>Trade Hero, Equipment using $HOL (not same page as Bazaar)</li>
                                </ul>
                            </li>
                            <li>
                                <p>Commodities Exchange</p>
                                <ul>
                                    <li>Swap Soul Fragments and/or Preciouis Metails for Goods</li>
                                </ul>
                            </li>
                            <li>
                                <p>Chaotic Fusion Chamber</p>
                                <ul>
                                    <li>Disintegrate any Hero or Equipment with the Chaotic Trait to receive 1 Chaotic Sphere. Collect 15 Chaotic Spheres and activate the Chaotic Fusion Chamber to imbue any Hero or Equipment with the Chaotic Trait (so long as the Hero or Equipment does not have the Chaotic Trait to begin with!)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="main-token" className="main-token">
                <h2>Token</h2>
                <hr/>
                <p>The ecosystem within Heroes of Lowhelm will run on two native tokens, $HOL and $CAST. Players may spend to Summon Heroes, Equipment and so much more to aid them, on their epic adventure to save the Planet of Lowhelm.</p>
                <div className="main-token-body">
                    <div id="main-token-body-hol" className="main-token-body-hol">
                        <h3>$HOL</h3>
                        <p>$HOL tokens are the Premium Currency of Hereos of Lowhelm. $HOL can be used to Summon Premium Units, spend in The Bazaar Shops accepting the Premium Currency and also the In-Game Marketplace. $HOL total supply will be capped at 1,000,000,000. </p>
                        <img src="images/documentation/$HOL-screenshot.png" alt=""/>
                        <p className="list-title">$HOL can be earned via the following:</p>
                        <ul>
                            <li>PVP Arena</li>
                            <li>Tower of Lowhelm</li>
                            <li>Guild Boss</li>
                            <li>World Boss</li>
                            <li>Expeditions</li>
                            <li>Staking for Sales Dividends</li>
                            <li>(more information further down!)</li>
                        </ul>
                        <p>$HOL can be purchased via Zilswap and XCAD Dexes.</p>
                        <p className="main-token-body-hol-note"><span>Note:</span> Total supply is lesser now as unsold tokens have been burned. The contact address for $HOL is zil1n9z6pk3aca8rvndya2tfgmyexdsp8m44gpyrs3, and the burn address is zil1zgcjxy33yvfrzgcjxy33yvfrzgcjxy3sejrw7y.</p>
                    </div>
                    <div id="main-token-body-cast" className="main-token-body-cast">
                        <h3>$CAST</h3>
                        <p>$CAST (CASTPOINT) is the main In-Game currency of $HOL. It is used mainly for:</p>
                        <ul>
                            <li>Summoning Common Heroes and Equipment</li>
                            <li>Hero Star Grade Evolutions</li>
                            <li>Equipment Star Grade Evolutions</li>
                            <li>Purchasing of Common Goods via the Common Shop in The Bazaar</li>
                        </ul>
                        <p className="main-token-body-cast-note"><span>Note:</span> All $CAST spent In-Game by players are burnt.</p>
                    </div>
                    <div id="main-token-body-staking" className="main-token-body-staking">
                        <h3>Staking</h3>
                        <p>Players can choose to Stake their $HOL to earn Sales Dividends. Here's how:</p>
                        <img src="images/documentation/staking-screenshot.png" alt=""/>
                        <p> Essentially, Sales Dividends will occur in 2 situations and are considered as Sales. When there are Premium Hero or Equipment being Summoned or any In-Game Marketplace transactions such as Heroes and/or Equipment being sold or bought and much, much more. Premium Hero / Equipment Summons60% of the $HOL from the Sale will be added as rewards to the Staking Contract.</p>
                        <p>30% of the $HOL from the Sale will be used to buy $CAST and burn them. 5% of the $HOL from the Sale goes to the Team. 5% of the $HOL from the Sale will be used for Future Development and Marketing.
                        </p>
                        <p>In-Game Marketplace transactions will come with an additional 7.5% sales tax5% of the $HOL from the Sale will be added as rewards to the Staking Contract.2.5% of the $HOL from the Sale goes to the Team.
                        </p>
                        <p>Every day, 60% of the $HOL from all Premium Sales and the 5% of the $HOL from all Marketplace Sales will be totaled up and sent as rewards to the Staking Contract. Players will be paid daily in accordance to the percentage of their $HOL staked in comparison to the total amount of $HOL staked. The Player can then choose to withdraw the Dividend daily or at their own discretion.
                        </p>
                    </div>
                    <div id="main-token-body-deposit_withdrawals" className="main-token-body-deposit_withdrawals">
                        <h3>Deposit/Withdrawals</h3>
                        <p>To Begin the adventure in Heroes of Lowhelm, the Player must connect to the Game using Zilpay Mobile or Metamask. This will link the ZIL or ETH address to the Player Account (this will be referred to as the Wallet Address).</p>
                        <p>Depending on the Wallet connected, the Player will be given a Game Contract Address (whether it be Zil or Eth) that all token deposits ($HOL $CAST) will be sent to. The game will determine which account the deposit belongs to based on the sender’s Wallet Address, thus please ensure that funds sent are from the same Wallet Address that is linked to the Player Account. All token withdrawals ($HOL $CAST) are made directly to the Wallet Address linked to the Player Account.</p>
                        <p>If a Player wants to utilize other blockchains just for deposits and withdrawals ($HOL $CAST), then the Assets (NFTs) they can obtain in game will not require a Zil address. The Player may still utilize the In-Game Marketplace to buy and sell Assets with other Players. Should a Player want to withdraw the Assets and sell in Zilliqa NFT platforms such as Okimoto, then the Player will be required to link a Zil Address to the Player Account.</p>
                        <p>Change of wallet address is available with strict requirements/verifications and a fee.</p>

                    </div>
                </div>
            </section>
            <section id="main-final" className="main-final">
                <section id="main-final-target" className="main-final-target">
                    <h2>Target Development Dates</h2>
                    <hr/>
                    <div className="main-final-target-body">
                        <div className="main-final-target-body-1">
                            <h3>July 2022 - Playable Demo Launch</h3>
                            <p>Mint Heroes & Equipment and play the first Chapter of PVE Story Mode!</p>
                        </div>
                        <div className="main-final-target-body-2">
                            <h3>December 2022 - Full Version Launch</h3>
                            <p>Full version of game launch including PVE Story Modem, PVP Arena, Guilds, Mine Raids, and more!</p>
                        </div>
                        <div className="main-final-target-body-1">
                            <h3>2023 - New Features & Rebrand</h3>
                            <ul>
                                <li>New game features added over the years to add more various duties in-game.</li>
                                <li>Rebrand into Infinity Games Token and begin planning for the next game.</li>
                                <li>Planning for metaverse capabilities.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="main-final-team" className="main-final-team">
                    <h2>Team</h2>
                    <hr/>
                    <div className="main-final-team-body">
                        <div className="main-final-team-body-members">
                            <h3>Team Members</h3>
                            <ul>
                                <li><span>William Cho</span> - Project Manager</li>
                                <li><span>Blockchain Andy</span> - Project Advisor</li>
                                <li><span>Grisha Asatrian</span> - Blockchain Developer</li>
                                <li><span>Melanie Louw</span> - In-house Graphics Designer</li>
                                <li><span>Ron Privado</span> - Community Manager</li>
                                <li><span>Jake</span> - Community Moderator & PH Community Advocate</li>
                            </ul>
                        </div>
                        <div className="main-final-team-body-body-studios">
                            <h3>Collaborating Game Design & Development Studios</h3>
                            <ul>
                                <li>HPL Gamedesign Corporation</li>
                                <li>Definite Studios</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="main-final-socials" className="main-final-socials">
                    <h2>Socials</h2>
                    <hr/>
                    <div className="main-final-socials-body">
                        <ul>
                            <li>
                                <p>Website:</p>
                                <p>https://www.heroesoflowhelm.com</p>
                            </li>
                            <li>
                                <p>Twitter:</p>
                                <p>https://twitter.com/HLowhelm</p>
                            </li>
                            <li>
                                <p>Discord Official Group:</p>
                                <p>https://dsc.gg/heroesoflowhelm</p>
                            </li>
                            <li>
                                <p>Instagram:</p>
                                <p>https://www.instagram.com/hlowhelm</p>
                            </li>
                            <li>
                                <p>Telegram Announcements:</p>
                                <p>https://t.me/heroesoflowhelm_ann</p>
                            </li>
                            <li>
                                <p>GitHub:</p>
                                <p>https://github.com/Heroes-of-Lowhelm</p>
                            </li>
                            <li>
                                <p>Telegram Official Group:</p>
                                <p>https://t.me/heroesoflowhelm</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <div className="main-navigation main-navigation-collapsed-inactive">
                <ul>
                    <li><a href="#main-introduction">Introduction</a></li>
                    <li><a href="#main-story">Story</a></li>
                    <li><a href="#main-assets">Assets</a>
                        <ul className="main-navigation-sub">
                            <li><a href="#main-assets-body-heroes">Heroes</a></li>
                            <li><a href="#main-assets-body-elements">Elements</a></li>
                            <li><a href="#main-assets-body-natural_star_grade">Natural Star Grade</a></li>
                            <li><a href="#main-assets-body-hero_base_stats_and_skills">Hero Base Stats and Skills</a></li>
                            <li><a href="#main-assets-body-equipment">Equipment</a></li>
                            <li><a href="#main-assets-body-summoning">Summoning (Minting)</a></li>
                            <li><a href="#main-assets-body-summoning_preparation">Summoning Preparation</a></li>
                            <li><a href="#main-assets-body-guilds_and_lands">Guilds and Land</a></li>
                        </ul>
                    </li>
                    <li><a href="#main-gameplay">Gameplay</a>
                        <ul className="main-navigation-sub">
                            <li><a href="#main-gameplay-body-pve_adventure_mode">PVE Adventure Mode</a></li>
                            <li><a href="#main-gameplay-body-combat">Combat</a></li>
                            <li><a href="#main-gameplay-body-pvp_arena">PVP Arena</a></li>
                            <li><a href="#main-gameplay-body-element_stone_dungeon">Element Stone Dungeon</a></li>
                            <li><a href="#main-gameplay-body-tower_of_lowhelm">Tower of Lowhelm</a></li>
                            <li><a href="#main-gameplay-body-guild_wars">Guild Wars</a></li>
                            <li><a href="#main-gameplay-body-world_boss">World Boss</a></li>
                            <li><a href="#main-gameplay-body-mine_raids">Mine Raids</a></li>
                        </ul>
                    </li>
                    <li><a href="#main-additional_features">Additional Features</a>
                        <ul className="main-navigation-sub">
                            <li><a href="#main-additional_features-body-hero_expeditions">Hero Expeditions</a></li>
                            <li><a href="#main-additional_features-body-hero_loans">Hero Loans</a></li>
                            <li><a href="#main-additional_features-body-the_bazaar">The Bazaar</a></li>
                        </ul>
                    </li>
                    <li><a href="#main-token">Token</a>
                        <ul className="main-navigation-sub">
                            <li><a href="#main-token-body-hol">$HOL</a></li>
                            <li><a href="#main-token-body-cast">$CAST</a></li>
                            <li><a href="#main-token-body-staking">Staking</a></li>
                            <li><a href="#main-token-body-deposit_withdrawals">Deposit/Withdrawals</a></li>
                        </ul>
                    </li>
                    <li><a href="#main-final-target">Target Development Dates</a></li>
                    <li><a href="#main-final-team">Team</a></li>
                    <li><a href="#main-final-socials">Socials</a></li>
                </ul>
            </div>
        </main>
    );
}

export default Documentation;