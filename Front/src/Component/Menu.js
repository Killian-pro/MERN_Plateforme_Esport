import React from 'react';
import '../Style/News.css';
import {
    Link
} from "react-router-dom";

function Menu() {
    return (
        <div style={{ display: 'flex', flexdirection: 'row', justifyContent: 'center', alignItems: 'center', boxShadow: "1px 2px 1px #9E9E9E" }}>
            <div style={{ marginRight: '7%', fontWeight: 'bold', fontSize: '120%' }}>What's the game</div>
            <div style={{ margin: '2%', marginRight: '1%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/">ACCUEIL</Link>
            </div>
            <div style={{ margin: '2%', marginRight: '1%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: "75%" }} to="/Actualites">ACTUALITES</Link>
            </div>
            <div style={{ margin: '2%', marginRight: '1%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Stats">STATISTIQUES</Link>
            </div>
            <div style={{ margin: '2%', marginRight: '1%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Recrutement">RECRUTEMENT</Link>
            </div>
            <div style={{ margin: '2%', marginRight: '5%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Streams">STREAMS</Link>
            </div>
            <div style={{ margin: '1.5%', marginRight: '0.5%', borderColor: '#F17B15', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, padding: 5, paddingTop: 3 }}>
                {localStorage.getItem('id') ? <Link style={{ color: '#F17B15', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/User">USERS</Link> :
                <Link style={{ color: '#F17B15', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Connexion">CONNEXION</Link>}
            </div>
            <div style={{ margin: '1.5%', borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, padding: 5, paddingTop: 3 }}>
                <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Inscription">S'INSCRIRE GRATUITEMENT</Link>
            </div>
            <div style={{ marginRight: '5%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} onClick={()=>{localStorage.clear(); window.location.reload(false);}} >DECO</Link>
            </div>         
        </div>
    );
}
export default Menu;
