import React from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import {Link, useLocation} from "react-router-dom";
import banner from "../Img/bannerTeam.jpg";
import logo from '../Img/logo.gif'

function TeamInfo() {
    const location = useLocation()
    return (
        <div>
            <Menu />
            <div style={{ boxShadow: "1px 1px 1px 2px #9E9E9E", alignItems: 'center', display: 'flex', backgroundPosition: 'center', height: 250, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${banner})` }}>
            {location?.team?.logo ? <img style={{width:200,height:200, marginLeft: 200}} src={location?.team?.logo} alt={location?.team?.teamName}/> :  <img style={{width:200,height:200, marginLeft: 200}} src={logo} alt={location?.team?.teamName}/>}
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 200, flex: 1, flexDirection: "column" }}>
                    <h1 style={{ fontWeight: 'bold', color: "#B4B4B4", marginBottom: 0}}>EQUIPE</h1>
                    <h1 style={{ color: 'white' }}>{location?.team?.teamName}</h1>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>{location?.team?.tag}</div>
                </div>
                <div style={{  textAlign: 'center', borderStyle: 'solid', borderWidth: 2, color: 'white', padding: 50,marginRight:50 }}>
                    {/* CE EQUIPE NE RECRUTE PAS POUR LE MOMENT
                    <Link style={{ color: 'white' }}>recruter ce joueur</Link> */}
                    PROCHAINEMENT !
                    POSTULER A CETTE EQUIPE
                </div>
            </div>
            <div style={{ display: 'flex', margin: 50, marginLeft: 200, marginBottom: 50 }}>
                {console.log(location?.team)}
                <div style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>
                    <div style={{ backgroundColor: '#F2F4FA', height: 50, display: 'flex', padding: 50,alignItems:'center' }}>
                        <div style={{flex:1}}>
                        <h1>LEAGUE OF LEGEND</h1>
                        {location?.team?.rank && <h2>{location?.team?.rank}</h2>}
                        </div>
                        {location?.team?.streamUrl && <h2>{location?.team?.streamUrl}</h2>}
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        {location?.team?.ambition && <>
                            <h2>AMBITIONS</h2>
                            <div>
                                {location?.team?.ambition}
                            </div>
                        </>}
                        {location?.team?.experience && <>
                            <h2>EXPERIENCES ONLINE</h2>
                            <div>
                                {location?.team?.experience}
                            </div>
                        </>}
                        {location?.team?.description &&
                        <>
                            <h2>DESCRIPTION</h2>
                            <div>
                                {location?.team?.description}
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