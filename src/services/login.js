import axios from "axios";

//Checks if the production or development application is being run, and returns the correlating URL.
const BaseUrl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/";
    else{
      return "/";
    }    
  })();
//Sends the username and password of a user trying to login.
const login = ({username , password}) => {
    return axios.post(BaseUrl + "login" , {username , password})
    .then (response => response.data)
}

export default {login}