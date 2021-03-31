import React, { Component, useState } from 'react';
import '../Style/News.css';
import Modal from 'react-modal';
import Connexion from '../Pages/Connection'
import Register from '../Pages/Register'
import {
    Link
} from "react-router-dom";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
    }
  };

function Menu() {
    const [loginIsOpen, setLoginOpen] = useState(false);
    const [registerIsOpen, setRegisterOpen] = useState(false);
    function openLogin() {
        setLoginOpen(true);
    }
    function closeLogin() {
        setLoginOpen(false);
    }
    function openRegister() {
        setRegisterOpen(true);
    }
    function closeRegister() {
        setRegisterOpen(false);
    }
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
                <Link style={{ color: '#F17B15', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} onClick={openLogin}>CONNEXION</Link>
            </div>
            <div style={{ margin: '1.5%', borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, padding: 5, paddingTop: 3 }}>
                <Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%' }} onClick={openRegister} >S'INSCRIRE GRATUITEMENT</Link>
            </div>
            <Modal
                style={customStyles}
                isOpen={loginIsOpen}
                onRequestClose={closeLogin}
            >
                <Connexion />
            </Modal>
            <Modal
                style={customStyles}
                isOpen={registerIsOpen}
                onRequestClose={closeRegister}
            >
                <Register />
            </Modal>
        </div>
    );
}
export default Menu;
