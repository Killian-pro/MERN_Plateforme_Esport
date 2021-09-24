import React, { useEffect, useState, useRef } from 'react';
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
function Home() {
  const divref = useRef()
  const divwidth = useRef()

  const [height, setHeigt] = useState('')
  const [heightCard, setHeightCard] = useState('')
  const [width, setWidth] = useState('')
  // var widthres = (((divwidth.current.clientWidth)/2))
  useEffect(() => {

    setWidth((divwidth.current.clientWidth) / 2)
    setHeightCard(divwidth.current.clientHeight)
    setHeigt(divref.current.clientHeight)


  }, []);
  return (
      <div>
        <Menu />
        <div className="logo" ref={divref} >
          <div style={{ paddingBottom: 450, marginBottom: 40 }}>
            <div className="titre">
              <div className="soustitre" style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '5%', marginBottom: '2%' }}>Bienvenue sur What's The Game</div>
              <div className="soustitre" style={{ display: 'flex', flexDirection: 'column', fontSize: '30px', fontWeight: 'bold' }}>
                <span>La première plateforme française</span>
                <span>de statistiques, de recrutement et</span>
                <span>d'actualités autour de l'eSport.</span>
              </div>
            </div>
            <div>
              <Link to="/inscription">
                <button type="button" className="btn">Créer son compte</button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-around", position: 'absolute', bottom: '0%', left: 0, right: 0, top: height }}>
          <div ref={divwidth} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400}}>
            <img style={{ width: "40%", marginTop: -10 }} src={statimg} alt="stats" />
            <div style={{ color: '#686C70', fontSize: 18 }}><b>Consultez</b> les statistiques des différents jeux</div>
            <a href="#statBloc" style={{ marginTop: heightCard / 17, textAlign: 'center' }}><img style={{width: "10%"}} src={chevron}/></a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400}}>
            <img style={{ width: "40%", marginTop: -10}} src={equipelogo} alt="equipe" />
            <div style={{ color: '#686C70', fontSize: 18 }}><b>Recherchez</b> des joueurs et des équipes</div>
            <a href="#recrutementBloc" style={{ marginTop: heightCard / 17, textAlign: 'center' }}><img style={{width: "10%"}} src={chevron}/></a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400}}>
            <img style={{ width: "50%", paddingTop: 20, marginBottom: 30}} src={twitchlogo} alt="twitch" />
            <div style={{ color: '#686C70', fontSize: 18 }}><b>Regardez</b> vos streamers favoris sur Twitch</div>
            <a href="#twitchBloc" style={{ marginTop: heightCard / 17, textAlign: 'center' }}><img style={{width: "10%"}} src={chevron}/></a>
          </div>
        </div>
        <div className="statbloc">
          <div className="statlogo"><img className="statimg" src={statimg} alt="Logo" /></div>
          <div className="soustitres" id="statBloc">
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
              <Link to="/Stats">
                <button type="button" class="btnplus">Voir plus</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="blocrecrutement" id="recrutementBloc">

          <div className="soustitress">
            <div className="title">Rechercher grâce à notre outil des joueurs et des équipes</div>
            <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis vel felis at metus sodales cursus et eget sapien.
              Proin iaculis, sapien et faucibus volutpat, nisl augue mattis lacus,
              id egestas sapien velit eu lectus. Praesent ac sem lectus. Cras vel mollis lacus.</div>
            <div className="start">
              <Link to="/Recrutement">
                <button type="button" class="btnplus">Voir plus</button>
              </Link>
            </div>
          </div>
          <div className="recrutlogo"><img className="equipelogo" src={equipelogo} alt="Logo" /></div>
        </div>

        <div className="twitchbloc" id="twitchBloc">
          <div className="tlogo"><img className="twitchlogo" src={twitchlogo} alt="Logo" /></div>
          <div className="soustitres">
            <div className="title debut">
              Regardez vos streamers favoris en un simple clic
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis vel felis at metus sodales cursus et eget sapien.
              Proin iaculis, sapien et faucibus volutpat, nisl augue mattis lacus,
              id egestas sapien velit eu lectus. Praesent ac sem lectus. Cras vel mollis lacus.
            </div>
            <div className="end">
              <Link to="/Streams">
                <button type="button" class="btnplus">Voir plus</button>
              </Link>
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
            <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '75%', alignItems: 'center', color: '#440BD4' }} to="/Actualites">Voir plus d'articles dans notre page dédiée</Link>
          </div>
        </div>
        <Avis />
        <Footer />
      </div>
  );

}


export default Home;
