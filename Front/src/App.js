import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home"
import Stats from "./Pages/Stats"
import Stream from "./Pages/Stream"
import News from "./Pages/News"
import Recruitment from "./Pages/Recruitment"
import LeagueOfLegends from "./Pages/LeagueOfLegends"
import CSGO from "./Pages/CSGO"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import User from "./Pages/User"
import PlayerInfo from "./Pages/PlayerInfo";
import './Style/text.css';
import './Style/padding.css';
import './Style/margin.css';
import './Style/border.css';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Connexion">
            <Login />
          </Route>
          <Route path="/Inscription">
            <Register />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/statistiques/LeagueOfLegends">
            <LeagueOfLegends />
          </Route>
          <Route path="/statistiques/CSGO">
            <CSGO />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/Recrutement">
            <Recruitment />
          </Route>
          <Route path="/PlayerRecrutement/:name/" >
            <PlayerInfo />
          </Route>
          <Route path="/Streams">
            <Stream />
          </Route>
          <Route path="/Actualites">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



