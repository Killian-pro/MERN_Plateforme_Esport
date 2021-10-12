import React from 'react'
import AvisSimple from '../Component/AvisSimple';
import Avatar1 from '../Img/Avatar1.png'
import Avatar2 from '../Img/Avatar2.png'
import Avatar3 from '../Img/Avatar3.png'
function Avis() {
    return (
        <div style={{padding:15,paddingBottom:100}}>
            <h2 style={{textAlign:'center'}}>L'avis des gamers sur notre platforme</h2>
        <div style={{alignContent:'center',display:'flex'}}>
        <AvisSimple text={"Depuis que j'utilise ce site je gagne du temps, pour me focus sur mes games"} logo={Avatar1} pseudo={'Alcyone Sneaky'} team={'Alcyone'}/>
        <AvisSimple text={"J'aime trop pouvoir regarder plusieurs stream en même temps"} logo={Avatar2} pseudo={'KIP'} team={'Alcyone'}/>
        <AvisSimple text={"Les stats , j'adore !!!"} logo={Avatar3} pseudo={'Darksnaken'} team={'Alcyone'}/>
        </div>
        </div>
    );
}

export default Avis;
