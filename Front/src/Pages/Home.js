import React, { useEffect,useState ,useRef} from 'react';
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

  const [height,setHeigt]= useState('')
  const [width,setWidth]= useState('')
  // var widthres = (((divwidth.current.clientWidth)/2))
  useEffect(() => {
    console.log(divwidth.current.clientWidth)
    setWidth((divwidth.current.clientWidth)/2)
    setHeigt(divref.current.clientHeight)

  }, []);
  return (
    <div>
      <Menu />
      <div className="logo" ref={divref} >
        <div style={{ paddingBottom: 450, marginBottom: 40 }}>
          <div className="titre">
            <div className="soustitre" style={{ fontSize: '50px', fontWeight: 'bold' }}>Bienvenue sur What's The Game
            </div>
            <div className="soustitre">
              <h2>La première plateforme française</h2>
              <h2>de statistiques, de recrutement et</h2>
              <h2>d'actualités autour de l'esport.</h2>
            </div>
          </div>
          <div >
            <Link to="/inscription">
            <button type="button" className="btn">Créer son compte</button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '0%', display: 'flex', marginLeft: '15%', left: 0, right: 0, marginRight: '20%',top:height }}>
        <div ref={divwidth} style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400, marginLeft: '5%' }}>
          <img style={{ width: "40%", marginTop: -10, marginLeft: width/1.7 }} src={statimg} alt="stats" />
          <div style={{ textAlign: 'center', color: '#686C70', fontSize: 18 }}><b>Consulter</b> les statistiques des différents jeux</div>
          <img style={{ width: "10%", paddingTop: 13, marginLeft: width,marginRight: width}} src={chevron} alt="chevron" />
        </div>
        <div style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400, marginLeft: '5%' }}>
          <img style={{ width: "40%", marginLeft: '120px', marginTop: -10,marginLeft:(width)/1.7 }} src={equipelogo} alt="equipe" />
          <div style={{ textAlign: 'center', color: '#686C70', fontSize: 18 }}><b>Rechercher</b> des joueurs et des équipes</div>
          <img style={{ width: "10%", paddingTop: 13, marginLeft: width,marginRight: width }} src={chevron} alt="chevron" />
        </div>
        <div style={{ alignContent: 'center', boxShadow: "0px 3px 3px 0px #9E9E9E", backgroundColor: 'white', borderRadius: 25, height: 200, width: 400, marginLeft: '5%' }}>
          <img style={{ width: "50%", paddingTop: 20, marginLeft: 60, marginBottom: 7 , marginLeft:(width)/2}} src={twitchlogo} alt="twitch" />
          <div style={{ textAlign: 'center', color: '#686C70', fontSize: 18 }}><b>Regarder</b> vos streamers favoris sur Twitch</div>
          <img style={{ width: "10%", paddingTop: 13, marginRight: width,marginLeft:width}} src={chevron} alt="chevron" />

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
            <Link to="/Stats">
            <button type="button" class="btnplus">Voir plus</button>
            </Link>
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
            <Link to="/Recrutement">
            <button type="button" class="btnplus">Voir plus</button>
            </Link>
          </div>
        </div>
        <div className="recrutlogo"><img className="equipelogo" src={equipelogo} alt="Logo" /></div>
      </div>
      <div className="twitchbloc">
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
