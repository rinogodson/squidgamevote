import React from "react";
import { Howl } from "howler";
import "./OXBts.css";

function OXBts() {
  const sound = new Howl({
    src: ['./ButtonSound.mp3']
  });

  const handleMouseDown = () => {
    if (!sound.playing()) {
      sound.loop(true);
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
          onMouseUp={handleMouseUp} 
          className="xBt Bt"
        >
          ✕
        </button>
      </div>
      <div className="pad">
        <button 
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp} 
          className="oBt Bt"
        >
          〇
        </button>
      </div>
    </div>
  );
}

export default OXBts;