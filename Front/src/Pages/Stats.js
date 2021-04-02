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
    const [summoners,setSummoners]=useState('')

    function submit() {
        fetch('http://localhost:9000/testAPI?pseudo='+keyword)
            .then(response => response.json())
            .then(response => {
                console.log('reponse',response)
                setSummoners(response)
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

                   id : {summoners.id} 
                <br/>
                   pseudo : {summoners.name}
                   <br/>
                   lvl : {summoners.summonerLevel}
                   <br/>
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
