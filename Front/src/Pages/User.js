import React, {useEffect, useState} from "react";
import axios from 'axios'
import Menu from "../Component/Menu";

function Connexion() {
    const [user, setUser] = useState({})
    const [gameId, setGameId] = useState("1");
    const [teamName, setTeamName] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [logo, setLogo] = useState('');
    const [streamUrl, setStreamUrl] = useState('');
    const [experience, setExperience] = useState('');
    const [ambition, setAmbition] = useState('');
    const [rank, setRank] = useState('');

    useEffect(() => {
        sendvalue()
    }, [])


    function sendvalue() {
        axios.get('http://localhost:9000/Players', {
            params: {
                _id: localStorage.getItem('id')
            }
        }).then(res => setUser(res.data))
    }

    function createTeam() {
        const values = {gameId: gameId, teamName: teamName, tag: tag, description: description, logo: logo, streamUrl: streamUrl , experience: experience , rank :rank , ambition :ambition}
        axios.post('http://localhost:9000/Teams', values)
        //history.push("/");
    }

    return (
        <div>
            <Menu/>
            <div style={{backgroundImage: "linear-gradient(to right, #E92EFB, #04005E)", justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{backgroundColor: 'white', width: 900, height: '90vh'}}>
                    <h1 style={{textAlign: 'center'}}>Mes infos</h1>
                    <div style={{margin: 25}}>
                        <div>firstname : {user?.firstName}</div>
                        <div>lastName : {user?.lastName}</div>
                        <div>email : {user?.mail}</div>
                        <div>pseudo : {user?.pseudo}</div>
                        <div> stream : {user?.streamUrl}</div>
                        <div>password : {user?.password} </div>
                    </div>
                    <h1 style={{textAlign: 'center'}}>Ma Team</h1>
                    <div style={{margin: 25}}>
                        {localStorage.getItem('id') ? <button>Créer une équipe</button> :
                            <button disabled>Créer une équipe</button>}
                    </div>

                    <div>
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
                                style={{ width: "92%",color:'#696969', borderRadius: 5, margin: 10, height: 20, borderColor: '#A4A4A4', padding: 5 }}
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
                        <button onClick={() => {createTeam()}}>Créer l'équipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;