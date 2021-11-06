import React, { useContext } from "react";
import "../styles/Highlights.css";
import "../styles/workoutview.css";
import Context from "../context";
import axios from "axios";
import { toast } from "react-toastify";

const Highlights = (props) => {
  let { activeWorkout, setWorkout } = useContext(Context);

  if (!activeWorkout) {
    return <div>You have no workouts left!</div>;
  }

  const completeWorkouts = activeWorkout.Exercises.filter(
    ({ complete }) => complete === true
  );
  const allChecked = activeWorkout.Exercises.every(
    ({ complete }) => complete === true
  );

  const handleClick = async () => {
    if (!allChecked) return;

    console.log("Change workouts", activeWorkout);
    const updatedWorkouts = await axios.post(
      "/workout/completed/" + activeWorkout._id
    );

    console.log({ updatedWorkouts });
    toast("Workout completed!");
    setTimeout(() => {
      setWorkout(updatedWorkouts.data);
    }, 3000);
  };

  return (
    <div className="main-highlights-section">
      <div className="highlight-container">
        <span>🔥</span>
        <span>{activeWorkout.kcals} kcal</span>
      </div>
      <div className="highlight-container">
        <span>🕒</span>
        <span>{activeWorkout.time} Minutes</span>
      </div>
      <div className="highlight-container">
        <span>📒</span>
        <span>
          {completeWorkouts.length} /{activeWorkout.Exercises.length}
        </span>
      </div>
      <div
        onClick={handleClick}
        className={`highlight-container ${
          allChecked ? "highlight-container-green" : ""
        }`}
      >
        <span>✔️</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default Highlights;
