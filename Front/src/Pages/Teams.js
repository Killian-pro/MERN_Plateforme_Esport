import React, {useEffect, useState} from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import axios from "axios";
import {Link} from "react-router-dom";
import logo from '../Img/logo.gif'



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
                    <div style={{width: '15%', margin:10, display: "flex", flexDirection: "column", border: 'solid 1px', borderRadius: '10px'}}>
                       <Link style={{textDecoration: 'none',color:'black',alignItems:'center',display:'flex',flexDirection:'column',margin:5}} to={{pathname: `/team/${team._id}`, team: team}}>
                        {team.logo ? <img style={{width:"90%",height:200,}} src={team.logo} alt={team.teamName}/> :  <img style={{width:"90%",height:200,}} src={logo} alt={team.teamName}/>}
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