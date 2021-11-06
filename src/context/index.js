import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function Provider(props) {
  const [workout, setWorkout] = useState([]);

  const getWorkoutData = () => {
    axios
      .get("/workout")
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(getWorkoutData, []);

  const activeWorkout = workout.find(({ completed }) => !completed);

  return (
    <Context.Provider
      value={{ activeWorkout, workout, setWorkout, getWorkoutData }}
      {...props}
    />
  );
}

export default Context;
