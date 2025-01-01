import React from "react";
import "../App.css";
import ScoreBoard from "../components/ScoreBoard";
import OXBts from "../components/OXBts";
import "./Counter.css"
function Counter() {
  const [soldierSpeech, setSoldierSpeech] = React.useState("Hello, Players...")
  return (
    <div className="container">
      <div className="screen">
        <div className="scoreboard-container">
          <ScoreBoard letter="X" value="142" />
          <div className="separator">:</div>

          <ScoreBoard letter="O" value="132" />
        </div>
      </div>

      <p className="soldierSpeech">{soldierSpeech}</p>

      <img className="pinkSoldiers" src="./PS.svg"></img>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="buttons"
      >
        <OXBts />
      </div>
    </div>
  );
}

export default Counter;
