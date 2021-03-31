import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home"
import Stats from "./Pages/Stats"
import Stream from "./Pages/Stream"
import Actualite from "./Pages/Actualite"
import Recruitment from "./Pages/Recruitment"


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
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
            <Actualite />
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



