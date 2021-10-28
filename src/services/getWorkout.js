import axios from "axios";
import React from "react";

//Requests a workout object that is assigned to the authenticated user.
const BaseUrl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/api/";
    else 
      return "/"
  })();
const getWorkout = ({ Ouruser }) => {
    return axios.get(BaseUrl + `workout`).then((response) => response.data);
};
export default { getWorkout };