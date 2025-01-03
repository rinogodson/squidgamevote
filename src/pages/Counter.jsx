import React from "react";
import "../App.css";
import ScoreBoard from "../components/ScoreBoard";
import OXBts from "../components/OXBts";
import "./Counter.css";

import { motion } from "framer-motion";

function Counter({ votingInfo, setVotingInfo, setBorderColor }) {
  const [soldierSpeech, setSoldierSpeech] = React.useState("Player " + votingInfo.votingPlayers[0]);
  const [canVote, setCanVote] = React.useState(true);
  const [pointer, setPointer] = React.useState(0);
  const [votes, setVotes] = React.useState({ X: 0, O: 0 });
  const [doneVoting, setDoneVoting] = React.useState(false);

  const handleXvote = () => {
    if (pointer < votingInfo.votingPlayers.length) {
      setVotes({ X: votes["X"] + 1, O: votes["O"] });
      console.log(votes);
      if (pointer < votingInfo.votingPlayers.length - 1) {
        setSoldierSpeech("Player " + votingInfo.votingPlayers[pointer + 1]);
      }
      setCanVote(true);
      setPointer(pointer + 1);
    } else {
      setCanVote(false);
    }
  };

  const handleOvote = () => {
    if (pointer < votingInfo.votingPlayers.length) {
      setVotes({ X: votes["X"], O: votes["O"] + 1 });
      console.log(votes);
      if (pointer < votingInfo.votingPlayers.length - 1) {
        setSoldierSpeech("Player " + votingInfo.votingPlayers[pointer + 1]);
      }
      setCanVote(true);
      setPointer(pointer + 1);
    } else {
      setCanVote(false);
    }
  };

  React.useEffect(() => {
    if(pointer === votingInfo.votingPlayers.length){
      setSoldierSpeech(["Voting Ended,", <br />, (votes["X"] === votes["O"] ? ["Draw! Voting will be ", <br/>, "held again tomorrow."] : `Majority Chose ${votes["X"] > votes["O"] ? "X" : "O"}`)]);
      setBorderColor(votes["X"] === votes["O"] ? "#2b2b2b" : (votes["X"] > votes["O"] ? "#CE4345" : "#00A2AA"));
      setDoneVoting(true);
    }
  }, [pointer, votes, votingInfo.votingPlayers.length]);

  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.8)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0, transform: "scale(0.8)" }}
      transition={{ duration: 0.3 }}
      className="container"
      style={(doneVoting ? {boxShadow: "inset 0 0 1000px 1000000px " + (votes["X"] === votes["O"] ? "rgba(0, 27, 255, 0)" : (votes["X"] > votes["O"] ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 27, 255, 0.1)"))} : {})}
    >
      <div className="screen">
        <div className="scoreboard-container">
          <ScoreBoard
            letter="X"
            value={votes["X"].toString().padStart(3, "0")}
          />
          <div className="separator">:</div>
          <ScoreBoard
            letter="O"
            value={votes["O"].toString().padStart(3, "0")}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
      <p style={{ color: "#cccc" }}>{doneVoting ? "": "CurrentVoter:"}</p>
      <p className="soldierSpeech">{soldierSpeech}</p>
      </div>
      <img className="pinkSoldiers" src="./PS.svg" alt="Pink Soldiers" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: canVote ? "auto" : "none",
          transform: canVote ? "scale(1)" : "scale(0.95)",
          filter: canVote ? "none" : "grayscale(70%)",
        }}
        className="buttons"
      >
        <OXBts setCanVote={setCanVote} handleOvote={handleOvote} handleXvote={handleXvote} />
      </div>
    </motion.div>
  );
}

export default Counter;
