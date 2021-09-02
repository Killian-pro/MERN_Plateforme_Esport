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
            setMatches(tmp)
            //getInfoPlayerMatch(tmp)
            setIsMatchLoading(true)
        }
    }, [matches])

    function getInfoPlayerMatch(tmp) {
        tmp.map((item) => {
            const result = item.info.participants.filter(infoMatch => infoMatch.summonerName == summoners.name);

            tab.push(
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img className="rounded-full" src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + result[0].championName + '.png'}
                             style={{width: '50px'}}/>
                        {result[0].championName}
                    </div>
                    {getTimePlayed(result[0].timePlayed)}
                    <div style={{margin: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>{result[0].kills + " / " + result[0].deaths + " / " + result[0].assists}</div>
                        <div>{getKDA(result[0].kills, result[0].deaths, result[0].assists)}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>Niveau {result[0].champLevel}</div>
                        <div>{result[0].neutralMinionsKilled + result[0].totalMinionsKilled} CS</div>
                    </div>
                </div>
            )
        })
    }

    function victory(match) {
        const result = match.info.participants.filter(infoMatch => infoMatch.summonerName == summoners.name);

        return result[0].win;
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

    function getTimePlayed(timePlayed) {
        var minutes = Math.floor(timePlayed / 60);
        var secondes = timePlayed - minutes * 60;

        return minutes + ":" + secondes;
    }

    function getQueue(id) {
        var filterQueue = queues.filter(queues => queues.queueId === id)
        if (!filterQueue || filterQueue.length < 1) {
            return "New Game Mode"
        } else {
            return filterQueue[0].description;
        }
    }

    function getKDA(kills, deaths, assists) {
        let result = (kills + assists) / deaths;

        return result.toFixed(2) + ":1 KDA";
    }

    return (
        <div style={{marginBottom: '2%'}}>
            <Menu/>
            <div style={{backgroundColor: '#E7E8EE', paddingTop: '30px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div className="inputs" style={{width: '80%'}}>
                        <input value={keyword} placeholder={"Nom d'invocateur"}
                               onChange={(event) => setKeyword(event.target.value)}
                               onKeyUp={(event) => handleKeyPress(event)}/>
                        <span className="iconbox">
                            <button onClick={() => {getSumByName()}}><IoIosSearch/></button>
                        </span>
                    </div>
                </div>
                {isLoading && <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: '5%', marginRight: '5%'}}>
                    <div className="r" style={{width: '80%', backgroundColor: 'white', display: 'flex', flexDirection: 'row'}}>
                        <img className="r-l" src={'https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/' + summoners.profileIconId + '.png'} alt="profileIcon" style={{width: '10%'}}/>
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
                        {getInfoPlayerMatch(matches)}
                        {matches?.map((match, index) => (
                            <div className={(victory(match) === true ? "bg-blue" : "bg-red")}>
                                <div className="matchList">
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        {getQueue(match.info.queueId) == "5v5 Ranked Solo games" ? "Match classé solo" : getQueue(match.info.queueId) == "5v5 Ranked Flex games" ? "Ranked 5v5 Flex" : getQueue(match.info.queueId)}
                                        {tab[index]}
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        {match.info.participants.map((item) => (
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={'https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/' + item.championName + '.png'}
                                                         style={{width: '30px', marginRight: '10px'}}/>
                                                    <span style={{fontSize: 15}} className={(item.summonerName === summoners.name ? "font-bold" : "")}>{item.summonerName}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
