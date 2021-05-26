import React from "react";
import {
    Link
} from "react-router-dom";
import Menu from '../Component/Menu';


function Stats() {
    return (
        <div style={{marginBottom: '2%'}}>
            <Menu/>
            <div>
                <Link style={{color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%'}} to="/statistiques/LeagueOfLegends">LeagueOfLegends</Link>
                <Link style={{color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%'}} to="/statistiques/CSGO">Valorant</Link>
            </div>
        </div>
    );
}

export default Stats;
