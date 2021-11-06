import React, { useState, useEffect } from "react";
import axios from "axios";
import CompletedWorkout from "./CompletedWorkout";
import "../styles/listCompleteWorkouts.css";
const ListCompleteWorkout = () => {
  const [completedWorkoutData, setCompletedWorkoutData] = useState([]);

  const getCompletedWorkoutData = () => {
    axios
      .get("/workout/completed")
      .then((res) => {
        console.log(res);
        setCompletedWorkoutData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(getCompletedWorkoutData, []);

  return (
    <div className="main-completed-workout-list-container">
      <h1 className="workout-title">Completed Workouts:</h1>

      <div className="main-completed-workout-list-content">
        {completedWorkoutData.map((workout) => (
          <CompletedWorkout key={workout._id} {...workout} />
        ))}
      </div>
    </div>
  );
};

export default ListCompleteWorkout;
