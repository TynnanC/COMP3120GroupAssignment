import axios from "axios";

const sendLogin = async(userEmail) => {
    let response = axios.post("/client/", {
        body: {
            username: userEmail,
        },
    });

    return response;
};

export default sendLogin;