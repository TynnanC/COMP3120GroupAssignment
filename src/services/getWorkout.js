import axios from "axios";
import React from 'react';
const BaseUrl = "http://localhost:3001/api/"
const getWorkout=({Ouruser})=>{
    return axios.get(BaseUrl + `client/${Ouruser.id}/workouts`)
    .then(response=>response.data)
}
export default {getWorkout}