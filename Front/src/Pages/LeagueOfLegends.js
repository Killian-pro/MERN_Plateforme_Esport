import React, {useEffect, useState} from "react";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import queues from '../queueId.json';
import {IoIosSearch} from "react-icons/io";
import IRON from '../Img/ranked-emblems/Emblem_IRON.png'
import BRONZE from '../Img/ranked-emblems/Emblem_BRONZE.png'
import SILVER from '../Img/ranked-emblems/Emblem_SILVER.png'
import GOLD from '../Img/ranked-emblems/Emblem_GOLD.png'
import PLATINUM from '../Img/ranked-emblems/Emblem_PLATINUM.png'
import DIAMOND from '../Img/ranked-emblems/Emblem_DIAMOND.png'
import MASTER from '../Img/ranked-emblems/Emblem_MASTER.png'
import GRANDMASTER from '../Img/ranked-emblems/Emblem_GRANDMASTER.png'
import CHALLENGER from '../Img/ranked-emblems/Emblem_CHALLENGER.png'

function LeagueOfLegends() {
    const [isLoading, setIsLoading] = useState(false)
    const [isMatchLoading, setIsMatchLoading] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [summoners, setSummoners] = useState('')
    const [profile, setProfile] = useState([])
    const [matches, setMatches] = useState([])
    const emblems = {
        IRON,
        BRONZE,
        SILVER,
        GOLD,
        PLATINUM,
        DIAMOND,
        MASTER,
        GRANDMASTER,
        CHALLENGER
    }
    const tab = []

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            getSumByName()
        }
    }

    useEffect(() => {
        if (matches.length == 10 && isMatchLoading == false) {
            let tmp = [...matches]
            tmp = tmp.sort((a, b) => (a?.metadata?.matchId < b?.metadata?.matchId ? 1 : -1))
            //console.log(tmp);
            setMatches(tmp)

            //const result = tmp.filter(infoMatch => infoMatch.info.participants.summonerName == summoners.name);

            //getInfoPlayerMatch(tmp)

            //console.log(result);

            setIsMatchLoading(true)
        }
    }, [matches])

    function getInfoPlayerMatch(tmp) {
        tmp.map((item) => {
            const result = item.info.participants.filter(infoMatch => infoMatch.summonerName == summoners.name);

            tab.push(
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img className="rounded-full" src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + result[0].championName + '.png'} style={{width: '50px'}}/>
                        {result[0].championName}
                    </div>
                    <div style={{margin: '100px'}}>
                        {result[0].kills + "/" + result[0].deaths + "/" + result[0].assists}
                    </div>
                    {result[0].win === true ? 'Victoire' : 'Défaite'}
                </div>
            )
        })
    }

    function getSumByName() {
        fetch('http://localhost:9000/LeagueOfLegends/summoner?pseudo=' + keyword)
            .then(response => response.json())
            .then(response => {
                setSummoners(response)
                setIsLoading(true)
                getProfile(response.id)
                getMatchList(response.puuid)
            })
    }

    function getProfile(id) {
        fetch('http://localhost:9000/LeagueOfLegends/profile?id=' + id)
            .then(response => response.json())
            .then(response => {
                setProfile(response)
            })
    }

    function getMatchList(puuid) {
        fetch('http://localhost:9000/LeagueOfLegends/matchList?puuid=' + puuid)
            .then(response => response.json())
            .then(response => {
                response.map((item) => {
                    getMatch(item)
                })
            })
    }

    function getMatch(id) {
        fetch('http://localhost:9000/LeagueOfLegends/match?matchId=' + id)
            .then(response => response.json())
            .then(response => {
                setMatches(pretmp => ([...pretmp, response]))
            })
    }

    function getEmblem(tier) {
        return emblems[tier]
    }

    function getWinRate(wins, losses) {
        return Math.round(wins / (wins + losses) * 100)
    }

    function getQueue(id) {
        var filterQueue = queues.filter(queues => queues.queueId === id)

        return filterQueue[0].description;
    }

    return (
        <div style={{marginBottom: '2%'}}>
            <Menu/>
            <div style={{backgroundColor: '#E7E8EE'}}>
                <div className="inputs">
                    <input
                        value={keyword}
                        placeholder={"Nom d'invocateur"}
                        onChange={(event) => setKeyword(event.target.value)}
                        onKeyUp={(event) => handleKeyPress(event)}
                    />
                    <span className="iconbox">
                        <button onClick={() => {
                            getSumByName()
                        }}><IoIosSearch/></button>
                    </span>
                </div>
                {isLoading && <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: '5%', marginRight: '5%'}}>
                    <div style={{width: '80%', backgroundColor: 'blue', borderColor: 'blue', display: 'flex', flexDirection: 'row'}}>
                        <img src={'https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/' + summoners.profileIconId + '.png'} alt="profileIcon" style={{width: '10%'}}/>
                        {summoners.name}
                        <br/>
                        Level {summoners.summonerLevel}
                        <br/>
                    </div>
                </div>}

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "center", margin: '50px'}}>
                    <div style={{flexDirection: 'column', marginRight: '100px'}}>
                        {profile?.map((league) => (
                            <div className="leagues">
                                <img src={getEmblem(league.tier)} alt="Emblem" style={{width: '125px'}}/>
                                {/*<img src={require(`../Img/ranked-emblems/Emblem_${league.tier}.png`)} alt="Emblem" style={{width: '125px'}}/>*/}
                                <div style={{display: 'flex', flexDirection: 'column', marginRight: '50px', marginLeft: '50px'}}>
                                    <span className="RankType">{league.queueType === 'RANKED_SOLO_5x5' ? 'Classé solo' : 'Flex 5vs5 Ranked'}</span>
                                    <span className="TierRank">{league.tier} {league.rank}</span>
                                    <div>
                                        <span className="LeaguePoints">{league.leaguePoints} LP</span>
                                        <span className="WinLose"> / {league.wins}W {league.losses}L</span>
                                    </div>
                                    <span className="WinRate">Win Rate {getWinRate(league.wins, league.losses)}%</span>
                                </div>
                            </div>
                        ))}
                        {isLoading && <div style={{textAlign: 'center', borderRadius: 1, borderColor: 'grey', border: 'solid'}}>
                            <h1>Stats général</h1>
                            <div>
                                <h3>Les 10 premiers joueurs LOL</h3>
                                <ScrapSteam/>
                            </div>
                        </div>}
                    </div>

                    {isMatchLoading && <div>
                        {
                            getInfoPlayerMatch(matches)
                        }
                        {matches?.map((match, index) => (
                            /* <div>
                                 {match.info.participants.map((item) => (
                                     <div className={"matchList " + ((item.summonerName === summoners.name) && item.win === true ? 'bg-blue' : (item.summonerName === summoners.name) && item.win === false ? 'bg-red' : '')}>
                                         <div style={{display: 'flex', flexDirection: 'row'}}>
                                             {getQueue(match.info.queueId) == "5v5 Ranked Solo games" ? "Match classé solo" : getQueue(match.info.queueId) == "5v5 Ranked Flex games" ? "Ranked 5v5 Flex" : getQueue(match.info.queueId)}

                                         </div>
                                         <div style={{display: 'flex', flexDirection: 'column'}}>
                                             {match.info.participants.map((item) => (
                                                 <div style={{display: 'flex', flexDirection: 'row'}} className={(item.summonerName === summoners.name) && item.win === true ? 'bg-blue' : (item.summonerName === summoners.name) && item.win === false ? 'bg-red' : ''}>
                                                     <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                         <img src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + item.championName + '.png'} style={{width: '30px', marginRight: '10px'}}/>
                                                         <span style={{fontSize: 15}}>{item.summonerName}</span>
                                                     </div>
                                                 </div>
                                             ))}
                                         </div>
                                     </div>
                                 ))}
                             </div>*/
                            <div className="matchList">
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    {getQueue(match.info.queueId) == "5v5 Ranked Solo games" ? "Match classé solo" : getQueue(match.info.queueId) == "5v5 Ranked Flex games" ? "Ranked 5v5 Flex" : getQueue(match.info.queueId)}
                                    {tab[index]}
                                    {/*{match.info.participants.map((item) => (*/}
                                    {/*    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>*/}
                                    {/*        <div style={{display: 'flex', flexDirection: 'column'}}>*/}
                                    {/*            {item.summonerName === summoners.name && <img className="rounded-full" src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + item.championName + '.png'} style={{width: '50px'}}/>}*/}
                                    {/*            {item.summonerName === summoners.name && item.championName}*/}
                                    {/*        </div>*/}
                                    {/*        <div style={{padding: '10px'}}>*/}
                                    {/*            {item.summonerName === summoners.name && item.kills + "/" + item.deaths + "/" + item.assists}*/}
                                    {/*        </div>*/}
                                    {/*        /!*{(item.summonerName === summoners.name) && item.win === true ? 'Victoire' : (item.summonerName === summoners.name) && item.win === false ? 'Défaite' : ''}*!/*/}
                                    {/*    </div>*/}
                                    {/*))}*/}
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    {match.info.participants.map((item) => (
                                        <div style={{display: 'flex', flexDirection: 'row'}} className={(item.summonerName === summoners.name) && item.win === true ? 'bg-blue' : (item.summonerName === summoners.name) && item.win === false ? 'bg-red' : ''}>
                                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                <img src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + item.championName + '.png'} style={{width: '30px', marginRight: '10px'}}/>
                                                <span style={{fontSize: 15}}>{item.summonerName}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default LeagueOfLegends;
