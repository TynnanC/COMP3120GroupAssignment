import React from "react";
import "../styles/Highlights.css";

const Highlights = (props) => {
  return (
    <div className="main-highlights-section">
      <div className="highlight-container">
        <p>🔥{props.cals}</p>
      </div>
      <div className="highlight-container">
        <p>🕒{props.dtime}</p>
      </div>
      <div className="highlight-container">
        <p>📒{props.cals}</p>
      </div>
      <div className="highlight-container">
        <p>✔️{props.cals}</p>
      </div>
    </div>
  );
};

export default Highlights;
