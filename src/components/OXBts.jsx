import React from "react";
import { Howl } from "howler";
import "./OXBts.css";

function OXBts({ handleOvote, handleXvote}) {
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

  return (
    <div className="ox-bt-container">
      <div className="pad">
        <button 
          onMouseDown={handleMouseDown} 
          onMouseUp={()=>{
            handleMouseUp()
            setTimeout(() => {
              handleXvote()
              flip.play();
            }, 300);

          }} 
          className="xBt Bt"
        >
          ✕
        </button>
      </div>
      <div className="pad">
        <button 
          onMouseDown={handleMouseDown} 
          onMouseUp={()=>{
            handleMouseUp()

            setTimeout(() => {
              handleOvote();
              flip.play();
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