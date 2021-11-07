import React, { useContext } from "react";
import "../styles/workoutview.css";
import Context from "../context";

const WorkoutView = (props) => {
  const { activeWorkout, workout, setWorkout } = useContext(Context);

  const handleChange = (event) => {
    const { target } = event;
    const { index } = target.dataset;

    activeWorkout.Exercises[index].complete = target.checked;
    setWorkout([...workout]);
  };

  if (!activeWorkout) return null;

  return (
    <div className="main-workout-container">
      <div className="main-workout-heading-container">
        <h1 className="main-workout-heading">{activeWorkout.workoutName}</h1>
      </div>
      <div className="main-workout-data">
        <div className="main-wu">
          <h2>Warmup:</h2>
          <p>-{activeWorkout.warmUp[0].exercise}</p>
          <p>🕒{activeWorkout.warmUp[0].time} Seconds</p>
        </div>
        <div className="main-wo">
          <h2>Workout</h2>
          {activeWorkout.Exercises.map((workout, index) => (
            <div className="main-workout-item-container">
              <input
                type="checkbox"
                data-index={index}
                onChange={handleChange}
                checked={workout.complete}
              />
              <p>
                {workout.name}: {workout.sets} Sets of {workout.repetitions}{" "}
                Reps 💪{workout.weight} KGS
              </p>
              <p></p>
            </div>
          ))}
        </div>
        <div className="main-wd">
          <h2>Warmdown:</h2>
          <p>-{activeWorkout.warmDown[0].exercise}</p>
          <p>🕒{activeWorkout.warmDown[0].time} Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutView;
