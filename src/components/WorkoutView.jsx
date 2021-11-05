import React, { useContext } from "react";
import "../styles/workoutview.css";
import Context from "../context";

const WorkoutView = (props) => {
  const {
    workout: [workout],
    setWorkout,
  } = useContext(Context);

  const handleChange = (event) => {
    const { target } = event;
    const { index } = target.dataset;

    workout.Exercises[index].complete = target.checked;
    setWorkout([workout]);
  };

  const allChecked = workout.Exercises.every(
    ({ complete }) => complete === true
  );

  if (!workout) return null;

  return (
    <div className="main-workout-container">
      <div className="main-workout-heading-container">
        <h1 className="main-workout-heading">{workout.workoutName}</h1>
      </div>
      <div className="main-workout-data">
        <div className="main-wu">
          <h2>Warmup:</h2>
          <p>
            {workout.warmUp[0].exercise}: {workout.warmUp[0].time} Seconds
          </p>
        </div>
        <div className={`main-wo ${allChecked ? "highlight" : ""}`}>
          <h2>Workout</h2>
          {workout.Exercises.map((workout, index) => (
            <div className="main-workout-item-container">
              <input
                type="checkbox"
                data-index={index}
                onChange={handleChange}
              />
              <p>
                {workout.name}: {workout.sets} of {workout.repetitions} Reps{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="main-wd">
          <h2>Warmdown:</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkoutView;
