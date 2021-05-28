import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
        <div style={{ backgroundColor: '#F5F5F5', paddingLeft: '20%', paddingRight: '20%' }}>
            <div style={{ flexDirection: 'row', display: 'flex', alignContent: 'center', justifyContent: 'space-evenly',paddingTop:'5%' }}>
                <div>
                    <div style={{ fontWeight: 'bold' }}>What's the game</div>
                    <div style={{ marginTop: 10 }}>France</div>
                </div>
                <div>
                    <div style={{ fontWeight: 'bold' }}>Produit</div>
                    <div style={{ marginTop: 10 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/">Acceuil</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Actualites">Actualités</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Stats">Statistiques</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Recruitment">Recrutement</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/">Mon compte</Link></div>
                </div>
                <div>
                    <div style={{ fontWeight: 'bold' }}>Ressources</div>
                    <div style={{ marginTop: 10 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Streams">Streams</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} to="/Streams">Tutoriels</Link></div>
                </div>
                <div>
                    <div style={{ fontWeight: 'bold' }}>Legal</div>
                    <div style={{ marginTop: 10 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} >Condition d'utilisation</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} >Mentions légales</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} >Confidentialité</Link></div>
                    <div style={{ marginTop: 5 }}><Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} >Cookies</Link></div>
                </div>
            </div>
            <hr style={{ backgroundColor: 'grey', height: "0.05px", marginTop: '5%' }} />
            <div style={{ textAlign: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} >© 2021 What's The Game | All Rights Reserved</Link>
            </div>
        </div>
    );
}

export default Footer;
