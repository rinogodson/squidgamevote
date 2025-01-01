import React from 'react'
import './Eliminator.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
function Eliminator({playerCount, votingInfo, setVotingInfo}) {
    const [players, setPlayers] = React.useState(Array.from({ length: playerCount }, (_, i) => ({ id: (i + 1).toString().padStart(3, '0'), eliminated: false })));
    const [playerToBeEliminated, setPlayerToBeEliminated] = React.useState('')

    const navigate = useNavigate()

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
      <p style={{margin: '50px', color: 'white', overflow: 'auto', height: '200px'}}>
        {players.map((item) =>
          item.eliminated ? (
            <span
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="eliminated"
            >
              {item.id},{" "}
            </span>
          ) : null
        )}
      </p>
      <div className="input-cont">
      <button onClick={HandleLivePlayer} className='LiveBt'>L</button>
        <input placeholder='000' value={playerToBeEliminated} onChange={(e)=>setPlayerToBeEliminated(e.target.value)} type="text" className="playerToBeEliminated" />
        <button onClick={HandleKillPlayer} className='EliminateBt'>E</button>
      </div>
      <div style={{ display: 'flex', gap: '10px', color: 'white', fontFamily: 'JetBrains Mono', marginBottom: '20px', flexDirection: 'column' }}>
        <p>Voting in the order of:</p>
        <label>
          <input
            type="radio"
            name="order"
            value="ascending"
            checked={votingInfo.notReverse === true}
            onChange={() => setVotingInfo({ ...votingInfo, notReverse: true })}
          />
          increasing
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="descending"
            checked={votingInfo.notReverse === false}
            onChange={() => setVotingInfo({ ...votingInfo, notReverse: false })}
          />
          reverse
        </label>
      </div>
      <button onClick={handleEliminate} className="RegBt">
        {"Let's Start the Vote!!! >"}
      </button>
    </motion.div>
  );
}

export default Eliminator
