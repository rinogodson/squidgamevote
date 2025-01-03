import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Home({ playerCount, setPlayerCount }) {
  const navigate = useNavigate();

  const toggleFullScreen = ()=>{
    const element = document.documentElement;
    const isFullscreen = document.fullscreenElement;
    if(!isFullscreen){
      element.requestFullscreen();
    }
  }

  const handleContinue = () => {
    if (playerCount > 1) {
      navigate("/eliminator");
    }
    else{
      alert(`${(playerCount === 0) ? "Please enter a number of players." : "Please enter a number greater than 1."}`);
    }
  };

  
  return (
    <motion.div
    onClick={toggleFullScreen}
      initial={{ opacity: 0, translateY: "50px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      exit={{ opacity: 0, translateY: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
      }}
      className="container"
    >
      <img className="logo" src="./Logo.svg" alt="" />
      <div className="playerInput">
        <label className="playerInputLabel">
          Input <br /> No. of players
        </label>
        <input
          value={playerCount}
          onChange={(e) => {
            if (e.target.value === "") {
              setPlayerCount("");
            } else if (
              e.target.value.length <= 3 &&
              parseInt(e.target.value, 10) <= 456
            ) {
              setPlayerCount(e.target.value);
            }
          }}
          className="playerInputChild"
          type="text"
        />
      </div>
      <button onClick={handleContinue} style={{marginBlockStart: "20px"}} className="RegBt">
        {"Continue >"}
      </button>
      <div>
        <p
          style={{
            fontFamily: "JetBrains Mono",
            color: "#fff",
            maxWidth: "30ch",
            textAlign: "center",
          }}
        >
          Can't decide on something with your friends? Play it off!
        </p>
        <p
          style={{
            fontFamily: "JetBrains Mono",
            color: "#cccccc",
            maxWidth: "30ch",
            textAlign: "center",
          }}
        >
          Compatible with small screens (It is a Progressive Web-App,{" "}
          <a
            style={{ color: "#FEFE40" }}
            href="https://pastebin.com/raw/PEe0gxzM"
          >
            Install it.
          </a>
          ), but desktop recommended.
        </p>
      </div>
      <a style={{ color: "#FEFE40" }} href="https://youtu.be/kdo46eMNcTM">
        Tutorial.
      </a>
    </motion.div>
  );
}

export default Home;
