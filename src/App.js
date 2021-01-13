import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/home"
import Stats from "./Pages/stats"
import Stream from "./Pages/stream"


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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



