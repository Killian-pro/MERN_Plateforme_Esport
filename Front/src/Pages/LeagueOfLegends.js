import React from "react";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import {useState} from "react";
import {IoIosSearch} from "react-icons/io";


function LeagueOfLegends() {
    const [keyword, setKeyword] = useState('')
    const [summoners, setSummoners] = useState('')
    const [profile, setProfile] = useState([])
    const [matchList, setMatchList] = useState([])
    const [match, setMatch] = useState([])

    function getSumByName() {
        fetch('http://localhost:9000/LeagueOfLegends/summoner?pseudo=' + keyword)
            .then(response => response.json())
            .then(response => {
                setSummoners(response)
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
                setMatchList(response)
                response.map((item) => {
                    getMatch(item)
                })
            })
    }

    function getMatch(id) {
        fetch('http://localhost:9000/LeagueOfLegends/match?matchId=' + id)
            .then(response => response.json())
            .then(response => {
                let tmp = match
                    tmp.push(response)
                setMatch(tmp)
                console.log(tmp)
            })
    }

    return (
        <div style={{marginBottom: '2%'}}>
            <Menu/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <button onClick={() => {
                    getSumByName()
                }}><IoIosSearch size='50'/></button>
                <input
                    style={{width: '30%', fontWeight: 'bold', borderRadius: 5}}
                    value={keyword}
                    placeholder={"Entre ton pseudo"}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: '5%', marginRight: '5%'}}>
                <div style={{
                    width: '80%', borderRadius: 1, borderColor: 'grey',
                    borderWidth: 1, border: 'solid', marginRight: '5%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'
                }}>
                    id : {summoners.id}
                    <br/>
                    pseudo : {summoners.name}
                    <br/>
                    lvl : {summoners.summonerLevel}
                    <br/>
                </div>
                <div style={{width: '20%', textAlign: 'center', borderRadius: 1, borderColor: 'grey', borderWidth: 1, border: 'solid', marginLeft: '5%'}}>
                    <h1>Stats général</h1>
                    <div>
                        <h3>Les 10 premiers joueurs LOL</h3>
                        <ScrapSteam/>
                    </div>
                </div>
            </div>
            <div>
                {profile?.map((item) => (
                    <div>
                        {item.tier} {item.rank} {item.leaguePoints} LP {item.wins} victoires {item.losses} defaites {item.queueType === 'RANKED_SOLO_5x5' ? 'Classé solo' : 'Flex 5vs5'}
                    </div>
                ))}
            </div>
            <div>
                {match?.map((item) => (
                    <div>
                        Type de match :&nbsp;
                        {item.info.queueId}
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {item.info.participants.map((item)=>(
                                <div>
                                    {item.summonerName}&nbsp;&nbsp;
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeagueOfLegends;
