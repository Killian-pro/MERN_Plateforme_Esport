import React from 'react';
import '../Style/Home.css';
import Menu from '../Component/Menu';
import statimg from '../Img/statistics.png';
import equipelogo from '../Img/deal.png';
import twitchlogo from '../Img/twitch.png';
import Footer from '../Component/Footer';
import News from '../Component/News/MainNews';
import setup from '../Img/setup.jpg';
import chevron from '../Img/chevron.png'
import {
  Link
} from "react-router-dom";
import Avis from '../Pages/Avis';
import AvisSimple from '../Component/AvisSimple';
function Home() {

  return (
    <div>
      <Menu />
      <div className="logo" >
        <div style={{ paddingBottom: 450, marginBottom: 40 }}>
          <div className="titre">
            <div className="soustitre" style={{ fontSize: '50px', fontWeight: 'bold' }}>Bienvenue sur What's The Game</div>
            <div className="soustitre">
              <h2>La première plateforme française</h2>
              <h2>de statistiques, de recrutement et</h2>
              <h2>d'actualités autour de l'esport.</h2>
            </div>
            <button type="button" className="btn">Créer son compte</button>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -225 ,display:'flex',margin:'auto',left:0,right:0}}>
        <div style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400,marginLeft:'5%' }}>
        <img style={{width:"40%",marginTop:-10,marginLeft:'120px'}} src={statimg} alt="stats" />
        <div style={{textAlign:'center',color:'#686C70',fontSize:18}}><b>Consulter</b> les statistiques des différents jeux</div>
        <img style={{width:"10%",paddingTop:13,marginLeft:170}}  src={chevron} alt="chevron" />
        </div>
        <div style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400 ,marginLeft:'5%'}}>
        <img style={{width:"40%",marginLeft:'120px',marginTop:-10}} src={equipelogo} alt="equipe" />
        <div style={{textAlign:'center',color:'#686C70',fontSize:18}}><b>Rechercher</b> des joueurs et des équipes</div>
        <img style={{width:"10%",paddingTop:13,marginLeft:180}}  src={chevron} alt="chevron" />
        </div>
        <div style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400,marginLeft:'5%' }}>
        <img style={{width:"50%",paddingTop:20,marginLeft:'100px',marginBottom:30}}  src={twitchlogo} alt="twitch" />
        <div style={{textAlign:'center',color:'#686C70',fontSize:18}}><b>Regarder</b> vos streamers favoris sur Twitch</div>
        <img style={{width:"10%",paddingTop:13,marginLeft:200}}  src={chevron} alt="chevron" />

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
      <div style={{ alignContent: 'center', backgroundColor: '#F5F5F5', padding: '3%' }}>
        <h1 style={{ textAlign: 'center', paddingBottom: '3%', color: '#645D5D' }}>
          Nos dernières actualités
        </h1>
        <div style={{ flexdirection: 'row', display: 'flex', alignContent: 'center', marginLeft: '10%' }}>
          <div>
            <img style={{ width: '55%', borderRadius: 10 }} src={setup} alt="article" />
            <News id={1} description={false} />
          </div>
          <div>
            <img style={{ width: '55%', borderRadius: 10 }} src={setup} alt="article" />
            <News id={2} description={false} />
          </div>
          <div>
            <img style={{ width: '55%', borderRadius: 10 }} src={setup} alt="article" />
            <News id={3} description={false} />
          </div>
          <div>
            <img style={{ width: '55%', borderRadius: 10 }} src={setup} alt="article" />
            <News id={4} description={false} />
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '2%', fontSize: '130%' }}>
          <Link style={{ color: '#827878', textDecoration: 'none', fontWeight: 'bold', fontSize: '75%', alignItems: 'center', color: '#440BD4' }} to="/Actualites">Voir plus d'articles dans notre page dédiée</Link>
        </div>
      </div>
      <Avis />
      <Footer />
    </div>
  );

}


export default Home;
