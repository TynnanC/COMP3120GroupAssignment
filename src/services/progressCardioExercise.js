import axios from "axios";
const BaseUrl = "http://localhost:3001/api/"
const progressCardioExercise=(tempWorkout, Ouruser)=>{
    const config={
        headers:{Authorization: "bearer "+Ouruser.token},
    }
    return axios.post(BaseUrl + `workouts`, tempWorkout, config)
    .then(response=>
        response.data)
}
export default {progressCardioExercise};