import {
    Link
} from "react-router-dom";
import ScrapSteam from "../Component/Scraper";
import Menu from '../Component/Menu';
import { RadialChart } from 'react-vis';
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


function Stats() {

    const myData = [{ angle: 1, label: 'kill' }, { angle: 5, label: 'death' }, { angle: 6, label: 'assist' }]
    const myData2 = [{ angle: 5, label: 'kill' }, { angle: 3, label: 'death' }, { angle: 10, label: 'assist' }]
    const myData3 = [{ angle: 2, label: 'kill' }, { angle: 1, label: 'death' }, { angle: 2, label: 'assist' }]
    const myData4 = [{ angle: 8, label: 'kill' }, { angle: 9, label: 'death' }, { angle: 3, label: 'assist' }]

    const [keyword, setKeyword] = useState('')
    return (
        <div style={{marginBottom:'2%'}}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <IoIosSearch size='50' />
                <input
                    style={{ width: '30%', fontWeight: 'bold', borderRadius: 5 }}
                    value={keyword}
                    placeholder={"Entre ton pseudo"}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ width:'80%',borderRadius: 1, borderColor: 'grey', borderWidth: 1, border: 'solid', marginRight: '5%',display:'flex',flexDirection:'row',flexWrap:'wrap' }}>
                    <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' ,margin:'1%' }}>
                        <h2>League of Legend</h2>
                        <RadialChart
                            data={myData}
                            showLabels={true}
                            colorRange={['#E92EFB', '#FF2079', '#440BD4', '#04005E', 'black']}
                            width={300}
                            height={300}
                        />
                        <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
                    </div>
                    <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center',margin:'1%' }}>
                        <h2>Valorant</h2>
                        <RadialChart
                            data={myData2}
                            showLabels={true}
                            colorRange={['#E92EFB', 'black', 'grey', '#04005E', 'black']}
                            width={300}
                            height={300}
                        />
                        <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
                    </div>
                    <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center',margin:'1%' }}>
                        <h2>CSGO</h2>
                        <RadialChart
                            data={myData3}
                            showLabels={true}
                            colorRange={['red', 'green', 'blue', '#04005E', 'black']}
                            width={300}
                            height={300}
                        />
                        <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
                    </div>
                    <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center',margin:'1%' }}>
                        <h2>Rocket League</h2>
                        <RadialChart
                            data={myData4}
                            showLabels={true}
                            colorRange={['pink', 'wheak', 'red', '#04005E', 'black']}
                            width={300}
                            height={300}
                        />
                        <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
                    </div>
                </div>
                <div style={{width:'20%',textAlign: 'center', borderRadius: 1, borderColor: 'grey', borderWidth: 1, border: 'solid', marginLeft: '5%' }}>
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
