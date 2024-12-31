import React from 'react'

function ScoreBoard({ letter, value }) {
const teamClass = letter === "X" ? "x-team" : "o-team";

return (
    <div>
        <div className="team-score">
                    <div className={`team-indicator ${teamClass}`}>{letter}</div>
                    <div className="score-display">
                        <div style={{height: "8px", width: "2px", backgroundColor: "#8e8b70"}}></div>
                            <div className="digit">{value[0]}</div>
                            <div style={{height: "8px", width: "2px", backgroundColor: "#8e8b70"}}></div>
                            <div className="digit">{value[1]}</div>
                            <div style={{height: "8px", width: "2px", backgroundColor: "#8e8b70"}}></div>
                            <div className="digit">{value[2]}</div>
                            <div style={{height: "8px", width: "2px", backgroundColor: "#8e8b70"}}></div>
                    </div>
            </div>
    </div>
)
}

export default ScoreBoard
