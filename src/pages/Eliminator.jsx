"use client"
import React from 'react'
import './Eliminator.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import Radio from '../components/select/select';
function Eliminator({playerCount, votingInfo, setVotingInfo, setBorderColor}) {
    const [players, setPlayers] = React.useState(Array.from({ length: playerCount }, (_, i) => ({ id: (i + 1).toString().padStart(3, '0'), eliminated: false })));
    const [playerToBeEliminated, setPlayerToBeEliminated] = React.useState('')

    const navigate = useNavigate()

    setBorderColor("#0b0b0b");

    function handleClick(id){
        setPlayers(players.map((player) => player.id === id ? { ...player, eliminated: !player.eliminated } : player))
    }
    function handleEliminate(){
        let votingPlayers = players.filter((player) => !player.eliminated)
        votingPlayers = votingInfo.notReverse ? votingPlayers : votingPlayers.reverse()
        setVotingInfo({...votingInfo, votingPlayers: votingPlayers.map((player) => player.id)})
        navigate('/voting')
    }

    function flipHandler(){
      setPlayers(players.map((player) => {return {...player, eliminated: !player.eliminated}}))
    }

    function HandleKillPlayer(){
      if(playerToBeEliminated){
        setPlayers(players.map((player) => player.id === playerToBeEliminated.padStart(3, '0') ? { ...player, eliminated: true } : player))
        
        setPlayerToBeEliminated('')
      }
    }

    function HandleLivePlayer(){
      if(playerToBeEliminated){
        setPlayers(players.map((player) => player.id === playerToBeEliminated.padStart(3, '0') ? { ...player, eliminated: false } : player))
        setPlayerToBeEliminated('')
      }
    }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      exit={{ opacity: 0, translateY: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        width: "100vw",
      }}
    >
      <p style={{ color: "white" }}>
        Eliminate Players.{" "}
        <button
          style={{ transform: "scale(0.7)" }}
          className="RegBt"
          onClick={flipHandler}
        >
          FLIP!
        </button>
      </p>
      
      <motion.div
      layout
      transition={{duration: 0.5}}
        style={{
          margin: "50px",
          color: "white",
          overflow: "scroll",
          height:"200px",
          maxHeight: "200px",
        }}
        className='eliminatedCont'
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
          }}
        >
          <AnimatePresence>
          {players.map((item) =>
            item.eliminated ? (
              <motion.span
              layout
              initial={{scale: 0}}
              animate={{scale: 1}}
              exit={{scale: 0}}
              transition={{duration: 0.5, type:"spring"}}
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="eliminated"
              >
                {item.id}
              </motion.span>
            ) : null
          )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="input-cont">
        <button onClick={HandleLivePlayer} className="LiveBt">
          Live
        </button>
        <input
          placeholder="000"
          value={playerToBeEliminated}
          onChange={(e) => setPlayerToBeEliminated(e.target.value)}
          type="text"
          className="playerToBeEliminated"
        />
        <button onClick={HandleKillPlayer} className="EliminateBt">
          Dead
        </button>
      </div>
      <div className="radioInputs">
        <p>Voting in the order of:</p>
        <Radio setVotingInfo={setVotingInfo} votingInfo={votingInfo}/>
      </div>
      <button onClick={handleEliminate} className="RegBt">
        {"Let's Start the Vote!!! >"}
      </button>
    </motion.div>
  );
}

export default Eliminator
