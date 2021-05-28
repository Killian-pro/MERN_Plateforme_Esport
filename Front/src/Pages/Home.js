import React from 'react';
import '../Style/Home.css';
import Menu from '../Component/Menu';
import statimg from '../Img/statistics.png';
import equipelogo from '../Img/deal.png';
import twitchlogo from '../Img/twitch.png';
function Home() {

  return (
    <div>
      <Menu />
      <div className="logo" >
        <div className="titre">
          <h1>Bienvenue sur Whats game</h1>
          <div className="soustitre">
            <h2>La première plateforme française</h2>
            <h2>de statistiques, de recrutement et</h2>
            <h2>d'actualités autour de l'esport.</h2>
          </div>
          <button type="button" class="btn">Créer son compte</button>
        </div>
      </div>
      <div className="statbloc">
        <div className="statlogo"><img className="statimg" src={statimg} alt="Logo" /></div>
        <div className="soustitres">
          <div className="title">
            Consulter les statistiques en temps
            réel sur tous les jeux du moment
          </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis vel felis at metus sodales cursus et eget sapien.
            Proin iaculis, sapien et faucibus volutpat, nisl augue mattis lacus,
             id egestas sapien velit eu lectus. Praesent ac sem lectus. Cras vel mollis lacus.
          </div>
          <div className="end">
          <button type="button" class="btnplus">Voir plus</button>
          </div>
        </div>
      </div>
      <div className="blocrecrutement">
        
        <div className="soustitress">
          <div className="title">Rechercher grâce à notre outil des joueurs et des équipes</div>
          <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis vel felis at metus sodales cursus et eget sapien.
          Proin iaculis, sapien et faucibus volutpat, nisl augue mattis lacus,
          id egestas sapien velit eu lectus. Praesent ac sem lectus. Cras vel mollis lacus.</div>
          <div className="start">
        <button type="button" class="btnplus">Voir plus</button>
        </div>
        </div>
        <div className="recrutlogo"><img className="equipelogo" src={equipelogo} alt="Logo" /></div>
       
      </div>
      <div className="twitchbloc">
        <div className="tlogo"><img className="twitchlogo" src={twitchlogo} alt="Logo" /></div>
        <div className="soustitres">
          <div className="title debut"> 
            Consulter les statistiques en temps
            réel sur tous les jeux du moment
          </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis vel felis at metus sodales cursus et eget sapien.
            Proin iaculis, sapien et faucibus volutpat, nisl augue mattis lacus,
            id egestas sapien velit eu lectus. Praesent ac sem lectus. Cras vel mollis lacus.
          </div>
          <div className="end">
          <button type="button" class="btnplus">Voir plus</button>
          </div>
      </div>
      
      </div>
    </div>
  );

}


export default Home;
