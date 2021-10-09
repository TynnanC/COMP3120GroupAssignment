import axios from "axios";
const BaseUrl = "http://localhost:3001/api/"
const getTrainer=({trainerId})=>{
    return axios.get(BaseUrl + `trainer/${trainerId}`)
    .then(response=>response.data)
}
export default {getTrainer}