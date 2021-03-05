import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import '../Style/Home-habib.css';
import News from '../Componant/News'
import Menu from '../Componant/Menu';

function Home  (){
  
    return (
      <div className="body logo" >
        <Menu/>
        <form>
          <input type="button" value="Démarrer la machine"/>
        </form>
        <div className="text capitale ">
          <h1>Bienvenue sur Whats game</h1>
          <h2>La première plateforme française</h2>     
          <h2>de statistiques, de recrutement et</h2>
          <h2>d'actualités autour de l'esport.</h2>

     </div>

      </div>
    );
  
}


export default Home;
