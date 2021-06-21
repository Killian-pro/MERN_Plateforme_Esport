import React from "react";
import {
    Link
} from "react-router-dom";
import Menu from '../Component/Menu';
import GameLinkSimple from '../Component/GameLinkSimple'

function Stats() {
    return (
        <div style={{ marginBottom: '2%' }}>
            <Menu />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <GameLinkSimple link={"/statistiques/LeagueOfLegends"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcfa4652c8d383f56/5e21837f63d1b6503160d39b/Home-page.jpg"} name={'LeagueOfLegends'} />
                <GameLinkSimple /*link={"/statistiques/CSGO"}*/ image={"https://i2.wp.com/assets.propmark.com.br/uploads/2020/11/7ee27e3c7ca9b2434381b2728cedb5a4.CSGO-Operation-10-Details.jpg?fit=1200%2C675&ssl=1&resize=1280%2C720"} name={'CSGO'} />
            </div>
        </div>
    );
}

export default Stats;
