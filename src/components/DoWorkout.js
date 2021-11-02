import React, { useState, useEffect } from "react";
import getWorkout from "../services/getWorkout.js";
import sendExercise from "../services/sendExercise.js";
import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";
import axios from "axios";
import Workout from "./Workout.jsx";

const DoWorkout = ({ Ouruser, setourUser, workout, setWorkout }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [workoutData, setWorkoutData] = useState();

  useEffect(() => {
    const getData = async () => {
      let result = await axios.get("http://localhost:3001/workout/");
      console.log("Call Result", result);
      setWorkoutData(result.data);
      setDataLoaded(true);
    };

    getData();
  }, []);

  //

  if (!isAuthenticated) {
    console.log("No user OAUTH:");
    return <p>Please Login</p>;
  }

  if (isAuthenticated && dataLoaded) {
    console.log("Workout Data State", workoutData);
    return (
      <>
        {workoutData.map((workout) => (
          <Workout key={workout._id} {...workoutData} />
        ))}
      </>
    );
  }
};
export default DoWorkout;
