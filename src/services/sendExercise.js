import axios from "axios";
const BaseUrl = "http://localhost:3001/api/";
const sendExercise = (exercise, Ouruser) => {
    const config = {
        headers: { Authorization: "bearer " + Ouruser.token },
    };
    return axios
        .post(BaseUrl + `workouts`, exercise, config)
        .then((response) => response.data);
};
export default { sendExercise };