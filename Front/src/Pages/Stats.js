import {
    Link
} from "react-router-dom";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import { RadialChart } from 'react-vis';
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


function Stats() {
    const [keyword, setKeyword] = useState('')

    function submit() {
        
        fetch("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/OwniShip", {
            "method": "POST",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
                "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com",
                "X-Riot-Token": "RGAPI-db3ff14d-312d-4f16-9cbc-9a922c4b0552",
            },
            // "body": JSON.stringify({
            //     name: keyword,
            // })
        })
            .then(response => response.json())
            .then(response => {
                console.log('reponse',response)
            })
    }

    return (
        <div style={{ marginBottom: '2%' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <button onClick={() => { submit() }}><IoIosSearch size='50' /></button>
                <input
                    style={{ width: '30%', fontWeight: 'bold', borderRadius: 5 }}
                    value={keyword}
                    placeholder={"Entre ton pseudo"}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ width: '80%', borderRadius: 1, borderColor: 'grey', borderWidth: 1, border: 'solid', marginRight: '5%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                    {keyword}

                </div>
                <div style={{ width: '20%', textAlign: 'center', borderRadius: 1, borderColor: 'grey', borderWidth: 1, border: 'solid', marginLeft: '5%' }}>
                    <h1>Stats général</h1>
                    <div>
                        <h3>Les 10 premiers joueurs LOL</h3>
                        <ScrapSteam />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
