import axios from "axios";
import React from 'react';
const BaseUrl = "http://localhost:3001/api/"
const getWorkout=({client})=>{
    return axios.get(BaseUrl + `client/${client.id}/workouts`)
    .then(response=>response.data)
}
export default {getWorkout}