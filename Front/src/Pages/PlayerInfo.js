import React, { useEffect, useState } from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import Menu from '../Component/Menu';
import axios from 'axios'
import banner from '../Img/banner.jpg'
import Footer from "../Component/Footer";
import { FiEdit } from 'react-icons/fi';
import Logo from '../Img/logo.gif'

function PlayerInfo(props) {
    const location = useLocation()
    const [gameId, setGameId] = useState("1");
    const [teamName, setTeamName] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [logo, setLogo] = useState('');
    const [streamUrl, setStreamUrl] = useState('');
    const [experience, setExperience] = useState('');
    const [ambition, setAmbition] = useState('');
    const [rank, setRank] = useState('');
    const [seeTeam, setSeeTeam] = useState(false);
    const [Teams, setTeams] = useState([]);

    function createTeam() {
        const values = { gameId: gameId, teamName: teamName, tag: tag, description: description, logo: logo, streamUrl: streamUrl, experience: experience, rank: rank, ambition: ambition, idcreator: location?.id?._id }
        axios.post('http://localhost:9000/Teams', values)
        setSeeTeam(false)
        //history.push("/");
    }

    useEffect(() => {
        getMyTeams()
    }, [])


    function getMyTeams() {
        axios.get('http://localhost:9000/Teams/id',
            {
                params: {
                    _id: localStorage.getItem('id')
                }
            }).then(res => setTeams(res.data))
    }

    return (
        <div>
            <Menu />
            <div style={{ boxShadow: "1px 1px 1px 2px #9E9E9E", display: 'flex', backgroundPosition: 'center', height: 250, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${banner})` }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 200, flex: 1, flexDirection: "column" }}>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>GAME</div>
                    <h1 style={{ color: 'white' }}>{location?.id?.pseudo}</h1>
                    <div style={{ fontWeight: 'bold', color: "#B4B4B4" }}>{location?.id?.firstName} {location?.id?.lastName}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", flex: 1, flexDirection: "column", textAlign: 'center', borderStyle: 'solid', borderWidth: 2, color: 'white', margin: 80 }}>
                    CE JOUEUR EST DISPONIBLE
                    {location?.IsMine == false && <Link style={{ color: 'white' }}>recruter ce joueur</Link>}
                </div>
            </div>
            <div style={{ display: 'flex', margin: 50, marginLeft: 200, marginBottom: 50 }}>
                <div style={{ height: 200, display: 'flex', flex: 1 }}>
                    <div style={{ position: 'absolute', bottom: 200 }}>
                    {location?.id?.avatar ? <img style={{ width: 200, height: 200 }} src={location?.id?.avatar} alt="ico" /> :  <img style={{ width: 200, height: 200 }} src={Logo} alt="ico" />}
                    </div>
                </div>
                <div style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>
                    <div style={{ backgroundColor: '#F2F4FA', height: 200, display: 'flex', padding: 50 }}>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <h1>LEAGUE OF LEGEND</h1>
                            <h2>RANK</h2>
                        </div>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: "center" }}>
                            <h2>CHAMPION</h2>
                            <div>LIST</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        {location?.id?.ambition || location?.IsMine == true && <>
                            <h2>AMBITIONS</h2>
                            <div>
                                {location?.id?.ambition}
                                <FiEdit />
                            </div>
                        </>}
                        {location?.id?.experience || location?.IsMine == true && <>
                            <h2>EXPERIENCES ONLINE</h2>
                            <div>
                                {location?.id?.experience}
                                <FiEdit />
                            </div>
                        </>}
                        {location?.id?.description || location?.IsMine == true &&
                            <>
                                <h2>DESCRIPTION</h2>
                                <div>
                                    {location?.id?.description}
                                    <FiEdit />
                                </div>
                            </>}

                        {location?.IsMine == true &&
                            <>
                                <h2>MA TEAM</h2>
                                <div>
                                    {Teams.teamName}
                                </div>
                                {/* <div>
                                    {Teams.rank}
                                </div> */}
                                {Object.keys(Teams).length < 2 && Teams &&
                                    <button onClick={() => { setSeeTeam(!seeTeam) }}>Créer une équipe</button>}
                                {seeTeam && <div>
                                    <div style={{ display: 'flex' }}>
                                        <input
                                            style={{ width: "90%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            required
                                            placeholder={"Nom de l'équipe *"}
                                            value={teamName}
                                            onChange={e => setTeamName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            required
                                            placeholder={"Tag *"}
                                            value={tag}
                                            onChange={e => setTag(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            required
                                            placeholder={"Description *"}
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", color: '#696969', borderRadius: 5, margin: 10, height: 20, borderColor: '#A4A4A4', padding: 5 }}
                                            placeholder={"Url du logo"}
                                            value={logo}
                                            onChange={e => setLogo(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            placeholder={"Stream url"}
                                            value={streamUrl}
                                            onChange={e => setStreamUrl(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            placeholder={"ambition"}
                                            value={ambition}
                                            onChange={e => setAmbition(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            placeholder={"experience"}
                                            value={experience}
                                            onChange={e => setExperience(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                            placeholder={"rank"}
                                            value={rank}
                                            onChange={e => setRank(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={() => { createTeam() }}>Créer l'équipe</button>
                                </div>}
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

export default PlayerInfo;
