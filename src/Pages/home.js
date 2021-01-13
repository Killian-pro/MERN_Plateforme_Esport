import React from "react";
import {
  Link
} from "react-router-dom";


function Home() {
  return (
    <div className="card">
      <Link to="/Stream">Stream</Link>
      <Link to="/Stats">Stats</Link>
    </div>
  );
}

export default Home;
