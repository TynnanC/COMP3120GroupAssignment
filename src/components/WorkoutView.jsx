import React from "react";
import "../styles/workoutview.css";

const WorkoutView = (props) => {
  return (
    <div className="main-workout-container">
      <div className="main-workout-heading-container">
        <h1 className="main-workout-heading">Beginner Workout 1</h1>
      </div>
      <div className="main-workout-data">
        <div className="main-wu">
          <h2>Warmup:</h2>
        </div>
        <div className="main-wo">
          <h2>Workout</h2>
          <div className="main-workout-item-container">
            <div className="workout-checkbox" />
            <p>Benchpress 5 sets of 50kgs</p>
          </div>
        </div>
        <div className="main-wd">
          <h2>Warmdown:</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkoutView;
