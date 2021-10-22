import axios from "axios";

//Sends the username and password of a user trying to login.
const BaseUrl = "http://localhost:3001/api/"
const login = ({username , password}) => {
    return axios.post(BaseUrl + "login" , {username , password})
    .then (response => response.data)
}
export default {login}