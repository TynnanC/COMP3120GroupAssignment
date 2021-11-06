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
  const allChecked = workout.Exercises.every(
    ({ complete }) => complete === true
  );

  const handleClick = () => {};

  return (
    <div className="main-highlights-section">
      <div className="highlight-container">
        <span>🔥</span>
        <span>{workout.kcals} kcal</span>
      </div>
      <div className="highlight-container">
        <span>🕒</span>
        <span>{workout.time} Minutes</span>
      </div>
      <div className="highlight-container">
        <span>📒</span>
        <span>
          {completeWorkouts.length} /{workout.Exercises.length}
        </span>
      </div>
      <div className={`highlight-container${allChecked ? "-green" : ""}`}>
        <span>✔️</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default Highlights;
