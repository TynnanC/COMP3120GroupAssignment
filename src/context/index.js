import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function Provider(props) {
    const [workout, setWorkout] = useState([]);

    const getWorkouts = () => {
        axios
            .get("/workouts")
            .then((res) => {
                console.log(res);
                setWorkout(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(getWorkouts, []);

    // const like = (id) => {
    //     const Workout = Workouts.find(({ _id }) => _id === id);
    //     Workout.liked = !Workout.liked;
    //     const likes = Workout.liked ? ++Workout.likes : --Workout.likes;
    //     axios
    //         .patch(`/Workout/${id}`, {
    //             likes,
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.error(err));

    //     const updatedWorkouts = [...Workouts];
    //     console.log({ updatedWorkouts });
    //     setWorkout(updatedWorkouts);
    // };

    // const deleteWorkout = (id) => {
    //     axios
    //         .delete(`/Workout/${id}`)
    //         .then((res) => {
    //             console.log(res);
    //             setWorkouts(res.data);
    //         })
    //         .catch((err) => console.error(err));
    // };

    return <Context.Provider value = {
        { workout, getWorkouts } } {...props }
    />;
}

export default Context;