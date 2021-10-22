import React, { useState } from "react";
import getWorkout from "../services/getWorkout.js";
import sendExercise from "../services/sendExercise.js";

const DoWorkout = ({ Ouruser, workout, setWorkout }) => {
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
        <div>
          <h1> {workout.workoutName} </h1>
          <p> The goal of the workout is to {workout.goalText} </p>
          <p>
            This will time {workout.time}
            minutes.
          </p>
          <p>
            You should perform this workout {workout.frequency}
            times a week.
          </p>
          <h2> Warmup </h2>
          <p>
            perform {workout.warmUp.exercise}
            for {workout.warmUp.time}
            seconds.
          </p>
          <h2> Weights exercises </h2>
          {workout.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <li> Name: {exercises.name} </li>
              <li>
                {exercises.sets}
                sets of {exercises.repetitions}
                repetitions.
              </li>
              <li>
                Rest {exercises.rest}
                seconds between sets.
              </li>
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
          <h2> Cardio exercises </h2>
          {workout.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <li> Name: {exercises.name} </li>
              <li>
                {exercises.sets}
                sets for {exercises.time}
                seconds.
              </li>
              <li>
                Rest {exercises.rest}
                seconds between sets.
              </li>
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
          <h2> Warmdown </h2>
          <p>
            perform {workout.warmDown.exercise}
            for {workout.warmDown.time}
            seconds.
          </p>
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
