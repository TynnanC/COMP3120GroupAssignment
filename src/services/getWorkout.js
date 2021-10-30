import axios from "axios";
import React from "react";

//Checks if the production or development application is being run, and returns the correlating URL.
const BaseUrl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/";
    else{
      return "/";
    }
  })();
//Requests a workout object that is assigned to the authenticated user.
const getWorkout = ({ Ouruser }) => {
    return axios.get(BaseUrl + `workout`).then((response) => response.data);
};

export default { getWorkout };