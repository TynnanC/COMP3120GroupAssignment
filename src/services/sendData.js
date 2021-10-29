import axios from "axios";

//Returns the details of a client that has the matching Email address. This is assuming all email addresses are unique.
const sendLogin = async(userEmail) => {
    let response = axios.post("/client/", {
        body: {
            username: userEmail,
        },
    });
    return response;
};

export default sendLogin;