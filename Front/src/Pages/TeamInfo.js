import React from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import {Link, useLocation} from "react-router-dom";
import banner from "../Img/banner.jpg";

function TeamInfo() {
    const location = useLocation()
    return (
        <div>
            <Menu />
            <div style={{ boxShadow: "1px 1px 1px 2px #9E9E9E", display: 'flex', backgroundPosition: 'center', height: 250, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${banner})` }}>
                <img style={{}} src={location?.team?.logo} alt={location?.team?.teamName}/>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 200, flex: 1, flexDirection: "column" }}>
                    <h1 style={{ fontWeight: 'bold', color: "#B4B4B4", marginBottom: 0}}>EQUIPE</h1>
                    <h1 style={{ color: 'white' }}>{location?.team?.teamName}</h1>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>{location?.team?.tag}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", flex: 1, flexDirection: "column", textAlign: 'center', borderStyle: 'solid', borderWidth: 2, color: 'white', margin: 80 }}>
                    CE EQUIPE NE RECRUTE PAS POUR LE MOMENT
                    <Link style={{ color: 'white' }}>recruter ce joueur</Link>
                </div>
            </div>
            <div style={{ display: 'flex',  margin: 50, marginLeft: 200,marginBottom:50 }}>
                <div style={{ height: 200, display: 'flex', flex: 1 }}>
                    <div style={{ position: 'absolute', bottom: 200 }}>
                        <img style={{ width: 200, height: 200 }} src={location?.id?.avatar} alt="ico" />
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
                        {location?.id?.profil && <>
                            <h2>Profils</h2>
                            <div>Player</div>
                        </>}
                        {location?.id?.ambition && <>
                            <h2>AMBITIONS</h2>
                            <div>
                                {location?.id?.ambition}
                            </div>
                        </>}
                        {location?.id?.experience && <>
                            <h2>EXPERIENCES ONLINE</h2>
                            <div>
                                {location?.id?.experience}
                            </div>
                        </>}
                        {location?.id?.description &&
                        <>
                            <h2>DESCRIPTION</h2>
                            <div>
                                {location?.id?.description}
                            </div>
                        </>}
                        <h2>LOCALISATION</h2>
                        <div>
                            FRANCE
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TeamInfo;