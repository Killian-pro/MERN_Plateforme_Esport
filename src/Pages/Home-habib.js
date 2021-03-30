import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import '../Style/Home-habib.css';
import Menu from '../Component/Menu';

function Home() {

  return (
    <>
      <Menu />

      <div className="logo" >

        <div className= "titre">
          <h1>Bienvenue sur Whats game</h1>
        <div className="soustitre">
          <h2>La première plateforme française</h2>
          <h2>de statistiques, de recrutement et</h2>
          <h2>d'actualités autour de l'esport.</h2>
          </div>
          <div class="buttonconnexion">
            <button type="button" class="btn">Créer son compte</button>
          </div>
            <canvas id="canvas"></canvas>
        
        </div>

      </div>
    </>
  );

}


export default Home;
