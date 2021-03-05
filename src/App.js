import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home-habib"
import Stats from "./Pages/Stats"
import Stream from "./Pages/Stream"
import Actualite from "./Pages/Actualite"


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/Stream">
            <Stream />
          </Route>
          <Route path="/Actualites">
            <Actualite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



