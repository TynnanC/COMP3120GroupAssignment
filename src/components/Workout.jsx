import React from "react";

const Workout = (props) => {
  const progressExercise = async (id) => {
    console.log("Sending to Server to Progress", id);
  };
  console.log("Workout comp loaded");
  return (
    <div className="workout">
      <h1> {props.workoutName} </h1>
      <p> The goal of the workout is to {props.goalText} </p>
      <p>
        This will take {props.time}
        minutes.
      </p>
      <p>
        You should perform this workout {props.frequency}
        times a week.
      </p>
      <div className="rows">
        <div className="three columns">
          <h2> Warmup </h2>
          <p className="warmUpOrDown">
            Perform {props.warmUp}
            for 60 seconds.
          </p>
        </div>
        <div className="three columns">
          <h2> Weights exercises </h2>
          {props.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <li className="exerciseName"> Name: {exercises.name} </li>
              <li>
                Scheme: {exercises.sets} sets of {exercises.repetitions}
                repetitions.
              </li>
              <li>Rest {exercises.rest} seconds between sets.</li>
              <li> Description: {exercises.description} </li>
              <li>
                If you want to progress, do the following:
                {exercises.progression}
              </li>
              <button onClick={() => progressExercise(exercises.id)}>
                Progress
              </button>
            </ul>
          ))}
        </div>
        <div className="three columns">
          <h2> Cardio exercises </h2>
          {props.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <li className="exerciseName"> Name: {exercises.name} </li>
              <li>
                Scheme: {exercises.sets} sets for {exercises.time} seconds.
              </li>
              <li>Rest {exercises.rest} seconds between sets.</li>
              <li> Description: {exercises.description} </li>
              <li>
                If you want to progress, do the following:
                {exercises.progression}
              </li>
              <button onClick={(e) => progressExercise(exercises.id)}>
                Progress
              </button>
            </ul>
          ))}
        </div>
        <div className="three columns">
          <h2> Warmdown </h2>
          <p className="warmUpOrDown">
            Perform {props.warmDown}
            for 60 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workout;
