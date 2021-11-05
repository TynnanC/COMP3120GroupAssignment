import React, { useContext } from "react";
import "../styles/Highlights.css";
import "../styles/workoutview.css";
import Context from "../context";

const Highlights = (props) => {
  const {
    workout: [workout],
  } = useContext(Context);

  const completeWorkouts = workout.Exercises.filter(
    ({ complete }) => complete === true
  );

  return (
    <div className="main-highlights-section">
      <div className="highlight-container">
        <p>🔥{props.cals}</p>
      </div>
      <div className="highlight-container">
        <p>🕒{props.dtime}</p>
      </div>
      <div className="highlight-container">
        <p>
          📒{completeWorkouts.length} /{workout.Exercises.length}
        </p>
      </div>
      <div className="highlight-container">
        <p>✔️{props.cals}</p>
      </div>
    </div>
  );
};

export default Highlights;
