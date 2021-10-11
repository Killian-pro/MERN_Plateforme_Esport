/*import React, { useState } from 'react'
import Menu from '../Component/Menu';
import Equipebox from '../Component/Equipebox'
import Footer from '../Component/Footer';
import PlayerCard from '../Component/PlayerCard';
import {Link} from "react-router-dom";


function Recruitment() {

    function fulldisplay() {
        const tab = []
        for (let index = 0; index < 12; index++) {
            tab.push(<Equipebox />)
        }
        return tab;
    }
    const [keyword, setKeyword] = useState('')
    return (
        <div >
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 15, justifyContent: 'center' }}>
                <PlayerCard />

            </div>
            <Footer />
        </div>
    );
}

export default Recruitment;*/

import React from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import RecruitmentLinkSimple from "../Component/RecruitmentLinkSimple";
import JoueurImage from '../Img/joueur.jpg'
import Teams from '../Img/Teams.jpg'

function Recruitment() {
    return (
        <div style={{ marginBottom: '2%' }}>
            <Menu />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 50 }} >
                <RecruitmentLinkSimple link={"/Recrutement/Players"} image={JoueurImage} name={'Joueurs'} />
                <RecruitmentLinkSimple link={"/Recrutement/Teams"} image={Teams} name={'Equipes'} />
            </div>
        </div>
    );
}

export default Recruitment;

