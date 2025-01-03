import React from "react";
import { Howl } from "howler";
import "./OXBts.css";

function OXBts({ setCanVote, handleOvote, handleXvote}) {
  const sound = new Howl({
    src: ['./ButtonSound.mp3'],
  });

  const flip = new Howl({
    src: ['./Flip.mp3']
  });

  const handleMouseDown = () => {
    if (!sound.playing()) {
      sound.play();
    }
  };

  const handleMouseUp = () => {
    sound.stop();
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="ox-bt-container">
      <div className="pad">
        <button 
          onClick={isMobile ? handleMouseDown : null}
          onMouseDown={!isMobile ? handleMouseDown : null}
          onMouseUp={()=>{
            handleMouseUp()
            setCanVote(false);
            setTimeout(() => {
              handleXvote()
              flip.play();
              setCanVote(true);
            }, 300);
          }} 
          className="xBt Bt"
        >
          ✕
        </button>
      </div>
      <div className="pad">
        <button 
          onClick={isMobile ? handleMouseDown : null}
          onMouseDown={!isMobile ? handleMouseDown : null}
          onMouseUp={()=>{
            handleMouseUp()
            setCanVote(false);
            setTimeout(() => {
              handleOvote();
              flip.play();
              setCanVote(true);
            }, 300);
          }} 
          className="oBt Bt"
        >
          〇
        </button>
      </div>
    </div>
  );
}

export default OXBts;