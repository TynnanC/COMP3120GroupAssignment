import React from "react";
import "../styles/workoutview.css";

const workouts = [
  "Benchpress 5 sets of 50kgs",
  "Benchpress 5 sets of 50kgs",
  "Benchpress 5 sets of 50kgs",
];
const initialState = Object.fromEntries(
  workouts.map((v, index) => [index, false])
);

const WorkoutView = (props) => {
  const [checked, setChecked] = React.useState(initialState);

  const handleChange = (event) => {
    const { target } = event;
    const { index } = target.dataset;

    console.log(target.checked, target.dataset.index);
    setChecked({
      ...checked,
      [index]: target.checked,
    });
  };

  // same as value => value
  const allChecked = Object.values(checked).every((value) => value === true);

  return (
    <div className="main-workout-container">
      <div className="main-workout-heading-container">
        <h1 className="main-workout-heading">Beginner Workout 1</h1>
      </div>
      <div className="main-workout-data">
        <div className="main-wu">
          <h2>Warmup:</h2>
        </div>
        <div className={`main-wo ${allChecked ? "highlight" : ""}`}>
          <h2>Workout</h2>
          {workouts.map((workout, index) => (
            <div className="main-workout-item-container">
              <input
                type="checkbox"
                data-index={index}
                onChange={handleChange}
              />
              <p>{workout}</p>
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
