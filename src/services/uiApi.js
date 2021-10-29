import axios from 'axios'

//Checks if the production or development application is being run, and returns the correlating URL.
const appurl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/api/";
    else{
        return "/";
    }
  })();
//Returns the details of all trainers.
const getTrainer=()=>{
    return axios.get(appurl + "trainer")
    .then(response => response.data)
}
//Returns the details of all clients.
const getClient=()=>{
    return axios.get(appurl + "client")
    .then(response => response.data)
}
//Returns the details of a specific client based on their clientId (their email), this is typically the logged in user.
const getClientById=(clientId)=>{
    return axios.get(appurl + `client/${clientId}`)
    .then(response=>response.data)
}
//Returns all workouts.
const getWorkouts = () => {
    return axios.get(appurl + "workouts")
    .then(response => response.data)
}
//Returns a workout with a specific Id.
const getWorkoutById = (id) => {
    return axios.get(`${appurl + "workouts"}/${id}`)
    .then(response => response.data)
}
//Returns a workout with a userID that matches a userId that has been passed to it.
const getWorkoutByClientId = (id) => {
    return axios.get(`${appurl + "client"}/${id}/"workouts"`)
    .then(response => response.data)
}
//Creates a new workout to be stored in the database.
const createWorkout = (newWorkout , user) => {
//Cannot create a workout if the user is not logged in.
    if(!user){
        console.log("User not logged in") 
        return new Promise(()=> null)
    }
    //Adding an authorization header to the request to check of user is logged in or not.
    const config = {headers: {Authorization : "Bearer " + user.token }}
    return axios.post(appurl + "workouts", newWorkout , config)
        .then(response => response.data)
}
//Returns all workouts that have been completed by a specific user based on their userId.
const getCompletedWorkouts = (Ouruser) => {
    console.log("this is request")
    return axios.get(`${appurl + "compworkouts"}/${Ouruser.id}`)
        .then(response => response.data)
}
//Create a single API variable to be used by other modules.
const unitApi = {
    getClient,
    getTrainer,
    getWorkouts,
    getWorkoutById,
    getWorkoutByClientId,
    createWorkout,
    getCompletedWorkouts,
    getClientById 
}

export default unitApi;
