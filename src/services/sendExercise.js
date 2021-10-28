import axios from "axios";
const BaseUrl = (() => {
    if (process.env.NODE_ENV !== 'production')
      return  "http://localhost:3001/api/";
    else 
      return "/"
  })();
const sendExercise = (exercise, id, Ouruser) => {
    const config = {
        headers: { Authorization: "bearer " + Ouruser.token },
        body: {
            exercise,
            id,
        },
    };
    return axios
        .post(BaseUrl + `workouts`, exercise, config)
        .then((response) => response.data);
};
export default { sendExercise };