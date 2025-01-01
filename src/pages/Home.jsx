import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Home({playerCount, setPlayerCount}) {
  const navigate = useNavigate();

  const handleContinue = () => {
    if(playerCount > 1){
      navigate("/eliminator");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      exit={{ opacity: 0, translateY: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "80px",
      }}
      className="container"
    >
      <img className="logo" src="./Logo.svg" alt="" />
      <div className="playerInput">
        <label className="playerInputLabel">Input <br/> No. of players</label>
        <input value={playerCount} onChange={(e)=>{
            if (e.target.value === "") {
            setPlayerCount("");
            } else if ((e.target.value).length <= 3 && (parseInt(e.target.value, 10) <= 456)) {
            setPlayerCount(e.target.value)
          }
        }} className="playerInputChild" type="text" />
      </div>
      <button onClick={handleContinue} className="RegBt">
        {"Continue >"}
      </button>
    </motion.div>
  );
}

export default Home;
