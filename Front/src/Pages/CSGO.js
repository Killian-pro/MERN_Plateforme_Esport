import React from "react";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import {useState} from "react";
import {IoIosSearch} from "react-icons/io";


function Valorant() {
    const [keyword, setKeyword] = useState('')
    const [summoners, setSummoners] = useState('')

    function getSumByName() {
        fetch('http://localhost:9000/CSGO?pseudo='+keyword)
            .then(response => response.json())
            .then(response => {
                setSummoners(response)
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
                    placeholder={"Entre ton id"}
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
                    ciciic
                    {/* id : {summoners.id}
                    <br/>
                    pseudo : {summoners.name}
                    <br/>
                    lvl : {summoners.summonerLevel}
                    <br/> */}
                    {console.log(summoners)}
                </div>
            </div>
        </div>
    );
}

export default Valorant;
