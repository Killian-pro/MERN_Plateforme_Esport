import React from 'react'
import Menu from '../Component/Menu';
import RecupStream from '../Component/Stream';
import footer from '../Img/footer.png'
import {
    Link
} from "react-router-dom";


function Connexion() {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex',flexDirection:'column'}}>
            <input
                style={{ width: '90%', fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30 }}
                placeholder={"LOGIN"}
            />
            <input
                style={{ width: '90%', fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30 }}
                placeholder={"MOT DE PASSE"}
            />
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', paddingBottom: '5%', paddingTop: '5%' }}>
                <button onClick={() => { }} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Submit</button>
            </div>
        </div>
    );
}

export default Connexion;
