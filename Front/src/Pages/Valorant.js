import React from "react";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import {useState} from "react";
import {IoIosSearch} from "react-icons/io";


function Valorant() {
    const [keyword, setKeyword] = useState('')
    const [summoners, setSummoners] = useState('')
    const [matchList, setMatchList] = useState('')
    const [match, setMatch] = useState('')
    let matches = []

    function getSumByName() {
        matches = []
        fetch('http://localhost:9000/LeagueOfLegends/summoner?pseudo='+keyword)
            .then(response => response.json())
            .then(response => {
                setSummoners(response)
                getMatchList(response.puuid)
            })
    }

    function getMatchList(puuid) {
        fetch('http://localhost:9000/LeagueOfLegends/matchList?puuid='+puuid)
            .then(response => response.json())
            .then(response => {
                setMatchList(response)
                response.map((item, index) => {
                    getMatch(item)
                })
            })
    }

    function getMatch(id) {
        fetch('http://localhost:9000/LeagueOfLegends/match?matchId='+id)
            .then(response => response.json())
            .then(response => {
                matches.push(response)
                setMatch(matches)
                //console.log('Matchs : '+matches.length,matches)
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
                    width: '80%',
                    borderRadius: 1,
                    borderColor: 'grey',
                    borderWidth: 1,
                    border: 'solid',
                    marginRight: '5%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
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
                valo
            </div>
        </div>
    );
}

export default Valorant;
