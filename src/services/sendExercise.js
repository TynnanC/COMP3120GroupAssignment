import axios from "axios";

//Checks if the production or development application is being run, and returns the correlating URL.
const BaseUrl = (() => {
  if (process.env.NODE_ENV !== 'production')
    return  "http://localhost:3001/api/";
  else{
    return "/";
  }
  })();

//Requests a new exercise to be created in the database. Part of the progress functionality.
const sendExercise = (exercise, id, Ouruser) => {
  const config = {
    headers: { Authorization: "bearer " + Ouruser.token },
    body: {
      exercise,
      id,
    },
  };
  return axios
    .post(BaseUrl + `workouts`, exercise, config)
    .then((response) => response.data);
};

export default { sendExercise };