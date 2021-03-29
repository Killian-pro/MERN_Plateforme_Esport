import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import '../Style/Home-habib.css';
import Menu from '../Componant/Menu';

function Home() {

  return (
    <>
      <Menu />

      <div className="logo" >

        <input type="button" value="Créer son compte" />
        <div className= "titre">
          <h1>Bienvenue sur Whats game</h1>
          <h2>La première plateforme française</h2>
          <h2>de statistiques, de recrutement et</h2>
          <h2>d'actualités autour de l'esport.</h2>

        </div>

      </div>
    </>
  );

}


export default Home;
