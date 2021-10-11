import React, {useEffect, useState} from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import axios from "axios";
import {Link} from "react-router-dom";

function Teams() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams()
    }, [])

    function getTeams() {
        axios.get('http://localhost:9000/Teams', {})
            .then(res => setTeams(res.data))
    }

    return (
        <div>
            <Menu/>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {teams?.map((team) => (
                    <div style={{width: '20%', margin: '10px', display: "flex", flexDirection: "column", border: 'solid 1px', borderRadius: '10px'}}>
                        <img style={{}} src={team.logo} alt={team.teamName}/>
                        <Link style={{textDecoration: 'none'}} to={{pathname: `/team/${team._id}`, team: team}}>
                            <div style={{fontSize: '20px', fontWeight: 'bold', padding: '10px'}}>{team.teamName}</div>
                        </Link>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default Teams;