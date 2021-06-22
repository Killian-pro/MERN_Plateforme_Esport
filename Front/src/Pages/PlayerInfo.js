import React, { useState } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
import Menu from '../Component/Menu';
import banner from '../Img/banner.jpg'

function PlayerInfo(props) {
    const location = useLocation()
    return (
        <div>
            <Menu />
            <div style={{ boxShadow: "1px 1px 1px 2px #9E9E9E", display: 'flex', backgroundPosition: 'center', height: 250, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${banner})` }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 200, flex: 1, flexDirection: "column" }}>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>GAME</div>
                    <h1 style={{ color: 'white' }}>{location.name}</h1>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>NOM PRENOM</div>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", flex: 1, flexDirection: "column", textAlign: 'center', borderStyle: 'solid', borderWidth: 2, color: 'white', margin: 80 }}>
                    CE JOUEUR EST DISPONIBLE
                    <Link style={{ color: 'white' }}>recruter ce joueur</Link>
                </div>
            </div>
            <div style={{ display: 'flex',  margin: 50, marginLeft: 200,marginBottom:50 }}>
                <div style={{ height: 200, display: 'flex', flex: 1 }}>
                    <div style={{ position: 'absolute', bottom: 200 }}>
                        <img style={{ width: 200, height: 200 }} src={"https://seek-team-prod.s3.fr-par.scw.cloud/users/6078392a868c0702994193.jpg"} alt="ico" />
                    </div>
                </div>
                <div style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>
                    <div style={{ backgroundColor: '#F2F4FA', height: 200, display: 'flex', padding: 50 }}>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <h2>APEX LEGENDS</h2>
                            <h1>BRONZE 4</h1>
                        </div>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: "center" }}>
                            <h2>5 060</h2>
                            <div>KILLS</div>
                            <h2>CHAMPION</h2>
                            <div>LIST</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <h2>Profils</h2>
                        <div>Player</div>
                        <h2>AMBITIONS</h2>
                        <div>Play in Tournaments.
                            Grow into something bigger.
                            To live my dream of playing in E-Sports
                            Pro leagues.
                        </div>
                        <h2>EXPERIENCES ONLINE</h2>
                        <div>
                            Diamond League (Apex)
                            Max Prestige in all CoD.
                        </div>
                        <h2>DESCRIPTION</h2>
                        <div>
                            I've gotten to diamond league solo in most of the seasons. I've bounced back between Apex and Warzone, but now am focused on Apex. I am a team player. My call-outs and reflexes are on point.
                        </div>
                        <h2>LOCALISATION</h2>
                        <div>
                            FRANCE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerInfo;
