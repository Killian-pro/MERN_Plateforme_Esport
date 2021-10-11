import React from "react";
import Menu from '../Component/Menu';
import GameLinkSimple from '../Component/GameLinkSimple'
import '../Style/Statistiques.css';
import CSGO from '../Img/CSGO.jpg'
import LOL from '../Img/LOL.jpg'


function Stats() {
    return (
        <div style={{ marginBottom: '2%' }}>
            <Menu />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <GameLinkSimple link={"/statistiques/LeagueOfLegends"} image={LOL} name={'LeagueOfLegends'} />
                <GameLinkSimple /*link={"/statistiques/CSGO"}*/ image={CSGO} name={'CSGO'} />
            </div>
        </div>
    );
}

export default Stats;
