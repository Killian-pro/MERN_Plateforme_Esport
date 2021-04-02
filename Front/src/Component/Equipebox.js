import React from 'react'
import Menu from './Menu';
import footer from '../Img/footer.png'
import alcyone from '../Img/Alcyone.png'
import {
    Link
} from "react-router-dom";


function Recruitment() {
    return (
        <div style={{ backgroundColor: '#440BD4', marginRight: "2%", marginTop: '1%', textAlign: 'center', borderRadius: 5, color: 'white', fontWeight: 'bold', width: '20%', height: '20%', marginLeft: '5%' }}>
            <div>ALC</div>
            <img style={{ width: '100%', height: '250px' }} src={alcyone} alt="alcyone" />
            <div style={{backgroundColor:'white',color:'black',marginBottom:-3.5,marginTop:-1.5}}>rank : IMO</div>
            <div style={{ borderColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', padding: 5, marginTop: 5,backgroundColor:'white' }}>
                <Link style={{ color: '#440BD4', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Connexion">Acceder à la Team</Link>
            </div>
        </div>
    );
}

export default Recruitment;
