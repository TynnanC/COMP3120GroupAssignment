import axios from "axios";
const BaseUrl = "http://localhost:3001/api/"
const getTrainer=({Ouruser})=>{
    return axios.get(BaseUrl + `trainer/${Ouruser.trainerId}`)
    .then(response=>response.data)
}
export default {getTrainer}