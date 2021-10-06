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

const unitApi = {
    getClient,
    getTrainer,
    getWorkouts,
    getWorkoutById,
    getWorkoutByClientId 
  
}

export default unitApi
