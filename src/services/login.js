import axios from "axios";

const BaseUrl = "http://localhost:3001/api/"

const login = ({username , password}) => {

    return axios.post(BaseUrl + "login" , {username , password})
    .then (response => response.data)
}

export default {login}