import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import '../Style/Home.css';
// import News from '../Componant/News'
import Menu from '../Component/Menu'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:1,
    }

  }

  render() {
    return (
      <div className="body">
        <Menu></Menu>
        <div className="imageback"> </div >
        <div className="container">
          <div className="card">
            <div className="contentbox">
              <h3>Stream</h3>
              <div className="text">
                ceci est le stream
          </div>
              <Link className="go" to="/Stream">Go to stream</Link>
            </div>
          </div >
          <div className="card">
            <div className="contentbox">
              <h3>Stats</h3>
              <div className="text">
                ceci est les stats
          </div>
              <Link className="go" to="/Stats">Go to Stats</Link>
            </div>
          </div >
          <div className="card">
            <div className="contentbox">
              <h3>Equipe</h3>
              <div className="text">
                ceci est les équipes
          </div>
              <Link className="go" to="/Stats">Go to Equipe</Link>
            </div>
          </div >
        </div>
        <div className="actualite">
          <h2>Nos dernières news</h2>
          <div className="affichageNews">
            {/* {data.map((e, i) =>e)} */}
            {/* <News id = {this.state.id}/> */}
          </div>
          <Link className="go" to="/Actualites">Voir plus d'articles de blog</Link>
        </div>
      </div>
    );
  }
}


export default Home;
