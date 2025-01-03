import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Eliminator from "./pages/Eliminator";



function App() {
  const [playerCount, setPlayerCount] = React.useState(0);
  const [votingInfo, setVotingInfo] = React.useState({"votingPlayers": [], "notReverse": true});
  const [borderColor, setBorderColor] = React.useState("#0b0b0b");

  return (
    <AnimatePresence>
      <div className="App" style={{ boxShadow: `inset 0 0 0px 5px ${borderColor}` }}>
      <Routes>
        <Route path="/" element={<Home playerCount={playerCount} setPlayerCount={setPlayerCount}  setBorderColor={setBorderColor}/>} />
        <Route path="/eliminator" element={<Eliminator playerCount={playerCount} votingInfo={votingInfo} setVotingInfo={setVotingInfo} setBorderColor={setBorderColor}/>} />
        <Route path="/voting" element={<Counter votingInfo={votingInfo} setVotingInfo={setVotingInfo} setBorderColor={setBorderColor} />} />
      </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
