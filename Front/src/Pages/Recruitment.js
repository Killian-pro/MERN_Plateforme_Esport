import React, { useState } from 'react'
import Menu from '../Component/Menu';
import Equipebox from '../Component/Equipebox'
import Footer from '../Component/Footer';
import PlayerCard from '../Component/PlayerCard';
import {Link} from "react-router-dom";


function Recruitment() {

    function fulldisplay() {
        const tab = []
        for (let index = 0; index < 12; index++) {
            tab.push(<Equipebox />)
        }
        return tab;
    }
    const [keyword, setKeyword] = useState('')
    return (
        <div >
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 15, justifyContent: 'center' }}>
                <PlayerCard />
                {/* <div style={{ flex: 1, minWidth: '20%', backgroundColor: '#e3e5e5'}}>
                    <div style={{borderColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 5,margin:10,height:'98%', backgroundColor: 'white'}}>
                        <input
                            style={{ width: '90%', fontWeight: 'bold', borderRadius: 5, margin: 10,height:30 }}
                            value={keyword}
                            placeholder={"Chercher une équipe   "}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <div style={{ margin: 10 }}>
                            <h3>Jeu:</h3>
                            <select name="jeu" id="jeu">
                                <option value="LOL">LOL</option>
                                <option value="VALO">VALORANT</option>
                                <option value="RL">ROCKET LEAGUE</option>
                            </select>
                        </div>
                        <div style={{ margin: 10 }}>
                            <h3>Rank:</h3>
                            <select name="rank" id="rank">
                                <option value="BRONZE">BRONZE</option>
                                <option value="SILVER">SILVER</option>
                                <option value="GOLD">GOLD</option>
                                <option value="PLAT">PLAT</option>
                                <option value="DIAM">DIAM</option>
                            </select>
                        </div>
                    </div>
                </div> */}
                {/* <div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', flex: 2, backgroundColor: '#e3e5e5' }}>
                        {fulldisplay()}
                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', paddingBottom: '5%', paddingTop: '5%', backgroundColor: '#e3e5e5' }}>
                        <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default Recruitment;
