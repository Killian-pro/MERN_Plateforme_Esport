import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import AvisSimple from '../Component/AvisSimple';
import Avatar1 from '../Img/Avatar1.png'
import Avatar2 from '../Img/Avatar2.png'
import Avatar3 from '../Img/Avatar3.png'
function Avis() {
    return (
        <div style={{padding:15,paddingBottom:100}}>
            <h2 style={{textAlign:'center'}}>L'avis des gamers sur notre platforme</h2>
        <div style={{alignContent:'center',display:'flex'}}>
        <AvisSimple text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} logo={Avatar1} pseudo={'Alcyone Sneaky'} team={'Alcyone'}/>
        <AvisSimple text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} logo={Avatar2} pseudo={'KIP'} team={'Alcyone'}/>
        <AvisSimple text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} logo={Avatar3} pseudo={'Darksnaken'} team={'Alcyone'}/>
        </div>
        </div>
    );
}

export default Avis;
