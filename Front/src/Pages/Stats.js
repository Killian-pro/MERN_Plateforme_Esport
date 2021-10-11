import React from "react";
import Menu from '../Component/Menu';
import GameLinkSimple from '../Component/GameLinkSimple'
import '../Style/Statistiques.css';
import CSGO from '../Img/CSGO.jpg'


function Stats() {
    return (
        <div style={{ marginBottom: '2%' }}>
            <Menu />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <GameLinkSimple link={"/statistiques/LeagueOfLegends"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcfa4652c8d383f56/5e21837f63d1b6503160d39b/Home-page.jpg"} name={'LeagueOfLegends'} />
                <GameLinkSimple /*link={"/statistiques/CSGO"}*/ image={CSGO} name={'CSGO'} />
            </div>
        </div>
    );
}

export default Stats;
