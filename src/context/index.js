import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const Context = createContext();

export function Provider(props) {
  const [workout, setWorkout] = useState([]);
  const [token, setToken] = useState("");

  const { getAccessTokenSilently } = useAuth0()


  const getWorkoutData = () => {
    //gets the token to attach with authorization headers
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      setToken(token)
    }

    getToken();
    axios
      .get("/workout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  useEffect(getWorkoutData, [token, getAccessTokenSilently]);

  const activeWorkout = workout.find(({ completed }) => !completed);

  return (
    <Context.Provider
      value={{ activeWorkout, workout, setWorkout, getWorkoutData }}
      {...props}
    />
  );
}

export default Context;
