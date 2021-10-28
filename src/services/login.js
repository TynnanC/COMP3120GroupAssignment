import axios from "axios";

//Sends the username and password of a user trying to login.
const BaseUrl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/api/";
    else 
      return "/"
  })();
const login = ({username , password}) => {
    return axios.post(BaseUrl + "login" , {username , password})
    .then (response => response.data)
}
export default {login}