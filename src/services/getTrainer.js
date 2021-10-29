import axios from "axios";

//Requests an object containing the trainer and their information assigned to a user.
const BaseUrl = (() => {
  if (process.env.NODE_ENV !== 'production')
    return  "http://localhost:3001/api/";
  else{
    return "/";
  }
})();
//Returns a trainer with the Id that matches the user's trainer Id.
const getTrainer=({Ouruser})=>{
    return axios.get(BaseUrl + `trainer/${Ouruser.trainerId}`)
    .then(response=>response.data)
}

export default {getTrainer}