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
import Valorant from "./Pages/Valorant"


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/statistiques/LeagueOfLegends">
            <LeagueOfLegends />
          </Route>
          <Route path="/statistiques/Valorant">
            <Valorant />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/Recrutement">
            <Recruitment />
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
          <Route path="/Connexion">
            <Home />
          </Route>
          <Route path="/Inscription">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



