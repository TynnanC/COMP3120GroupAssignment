import axios from "axios";
import React from "react";

//Requests a workout object that is assigned to the authenticated user.
const BaseUrl = process.env.BaseUrl || "http://localhost:3001/api/";
const getWorkout = ({ Ouruser }) => {
    return axios.get(BaseUrl + `/workout`).then((response) => response.data);
};
export default { getWorkout };