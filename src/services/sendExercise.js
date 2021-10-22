import axios from "axios";
const BaseUrl = "http://localhost:3001/api/";
const sendExercise = (exercise, id, Ouruser) => {
    const config = {
        headers: { Authorization: "bearer " + Ouruser.token },
        body: {
            workout,
            id,
        },
    };
    return axios
        .post(BaseUrl + `workouts`, exercise, config)
        .then((response) => response.data);
};
export default { sendExercise };