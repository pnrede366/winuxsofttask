import React from "react";
import { useState } from "react";
import "../Assets/Progressbar.css";
const Progressbar = (props) => {

        const progress = {
          transform: `rotate(${45 + parseInt(props.percent)}deg)`,
        };
        
  return (
    <div className="main">
                <h2 className="text">{(props.percent/1.8).toFixed(0)}</h2>

      <div className="parent">
        <div className="circle-1">
        </div>
        <div className="circle-2" style={progress}>

        </div>
      </div>
    </div>
  );
};

export default Progressbar;
