import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Workout from "./Workout.jsx";

const DoWorkout = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let result = await axios.get("http://localhost:3001/workout/");
      console.log("Call Result", result);
      setWorkoutData(result.data);
      setDataLoaded(true);
    };

    getData();
  }, []);

  if (!isAuthenticated) {
    console.log("No user OAUTH:");
    return <p>Please Login</p>;
  } else {
    if (dataLoaded) {
      console.log("Workout Data State", workoutData[0].Exercises);
      console.log("Workout Data: ", workoutData);
      return (
        <>
          {workoutData.map((workout) => (
            <>
              <Workout key={workout._id} workout={workout} />
              <hr />
            </>
          ))}
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
};
export default DoWorkout;
