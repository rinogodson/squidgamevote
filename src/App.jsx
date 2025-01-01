import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Eliminator from "./pages/Eliminator";

function App() {
  const [playerCount, setPlayerCount] = React.useState(456);
  const [votingInfo, setVotingInfo] = React.useState({"votingPlayers": [], "notReverse": true});
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home playerCount={playerCount} setPlayerCount={setPlayerCount} />} />
        <Route path="/eliminator" element={<Eliminator playerCount={playerCount} votingInfo={votingInfo} setVotingInfo={setVotingInfo} />} />
        <Route path="/voting" element={<Counter votingInfo={votingInfo} setVotingInfo={setVotingInfo} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
