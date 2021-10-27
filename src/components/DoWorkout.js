import React, { useState } from "react";
import getWorkout from "../services/getWorkout.js";
import sendExercise from "../services/sendExercise.js";
import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";

const DoWorkout = ({ Ouruser, setourUser, workout, setWorkout }) => {
  const { user } = useAuth0();
  if (!Ouruser) {
    unitApi.getClientById(user.email).then((data) => {
      setourUser(data);
    });
  }

  const progressExercise = async (id) => {
    console.log("Sending to Server to Progress", id);
    sendExercise(workout, id, Ouruser);
  };

  if (Ouruser) {
    getWorkout.getWorkout({ Ouruser }).then((data) => {
      setWorkout(data);
    });

    if (workout) {
      return (
        <div id="workout">
          <h1> {workout.workoutName} </h1>
          <p> The goal of the workout is to {workout.goalText} </p>
          <p>
            This will take {workout.time}
            minutes.
          </p>
          <p>
            You should perform this workout {workout.frequency}
            times a week.
          </p>
          <div className="rows">
            <div className="three columns">
              <h2> Warmup </h2>
              <p className="warmUpOrDown">
                Perform {workout.warmUp[0].exercise}
                for {workout.warmUp[0].time}
                seconds.
              </p>
            </div>
            <div className="three columns">
              <h2> Weights exercises </h2>
              {workout.Exercises.map((exercises) => (
                <ul key={exercises.id}>
                  <li className="exerciseName"> Name: {exercises.name} </li>
                  <li>
                    Scheme: {exercises.sets} sets of {exercises.repetitions}{" "}
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
              {workout.Exercises.map((exercises) => (
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
                Perform {workout.warmDown[0].exercise}
                for {workout.warmDown[0].time}
                seconds.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <p> No workouts have been planned </p>;
    }
  } else {
    return <p> Sign in to do a workout </p>;
  }
};
export default DoWorkout;
