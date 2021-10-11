import React, {useEffect, useState} from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import axios from "axios";

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
            <button onClick={() => {getTeams()}}>ALooo</button>
            <div>
                {teams?.map((team) => (
                    <div>
                        {team.teamName}
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default Teams;