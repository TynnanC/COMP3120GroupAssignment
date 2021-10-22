import axios from "axios";

//Requests an object containing the trainer and their information assigned to a user.
const BaseUrl = "http://localhost:3001/api/"
const getTrainer=({Ouruser})=>{
    return axios.get(BaseUrl + `trainer/${Ouruser.trainerId}`)
    .then(response=>response.data)
}
export default {getTrainer}