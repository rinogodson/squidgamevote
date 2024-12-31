import React from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
function App() {
  return (
    <div className="container">
      <div style={{position: "absolute", top: "70px"}} className="screen">
        <div className="scoreboard-container">
          <ScoreBoard letter="X" value="142" />
          <div className="separator">:</div>

          <ScoreBoard letter="O" value="132" />
        </div>
      </div>

      <div className="buttons">
        
      </div>

    </div>
  );
}

export default App;
