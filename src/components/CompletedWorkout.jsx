import React from "react";
import "../styles/completedworkout.css";

const CompletedWorkout = (props) => {
  return (
    <div className="main-completed-workout-container">
      <div className="completed-workout-name">
        <h1>{props.workoutName}</h1>
      </div>
      <div className="completed-workout-kcals">
        <h1>🔥 {props.kcals} Kcals</h1>
      </div>
      <div className="completed-workout-time">
        <h1>🕒 {props.time} Minutes</h1>
      </div>
    </div>
  );
};

export default CompletedWorkout;
