import axios from 'axios'

const appurl = "http://localhost:3001/api/"
const getTrainer=()=>{
    return axios.get(appurl + "trainer")
            .then(response => response.data)
}
const getClient=()=>{
    return axios.get(appurl + "client")
            .then(response => response.data)
}
const getClientById=(clientId)=>{
    return axios.get(appurl + `client/${clientId}`)
    .then(response=>response.data)
}
const getWorkouts = () => {
    return axios.get(appurl + "workouts")
            .then(response => response.data)
}
const getWorkoutById = (id) => {
    return axios.get(`${appurl + "workouts"}/${id}`)
            .then(response => response.data)
}
const getWorkoutByClientId = (id) => {
    return axios.get(`${appurl + "client"}/${id}/"workouts"`)
            .then(response => response.data)
}
const createWorkout = (newWorkout , user) => {
//Cannot create a workout if the user is not logged in
    if(!user){
        console.log("User not logged in") 
   return new Promise(()=> null)
   }
//Adding an authorization header to the request to check of user is  logged in or  not
   const config = {headers: {Authorization : "Bearer " + user.token }}

   return axios.post(appurl + "workouts", newWorkout , config)
               .then(response => response.data)
}
const unitApi = {
    getClient,
    getTrainer,
    getWorkouts,
    getWorkoutById,
    getWorkoutByClientId,
    createWorkout,
    getClientById 
}

export default unitApi
