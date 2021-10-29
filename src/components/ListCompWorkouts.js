
import React from "react";
import unitApi from "../services/uiApi";
import CompletedWorkout from "./CompletedWorkout";

//This creates a list of all workouts that have been completed by the logged in user.
const ListCompWorkouts = ({ Ouruser, completedWO, setCompWO }) => {
    //Checks if no workouts have been completed and updates the state to reflect this.
    if (!completedWO) {
        unitApi.getCompletedWorkouts(Ouruser)
        .then(response => {
            console.log(response)
            setCompWO(response)
        })
    }
    //If workouts have been completed, the state is updated and a list is made displaying each completed workout.
    if (completedWO) {
        return (
            <><div className = "ninty">
                <div>
                    <ul>
                        {completedWO.map((compWork) => (<CompletedWorkout key={compWork.id} compWork={compWork} Ouruser = {Ouruser}/>))}
                    </ul>
                </div>

            </div>
            </>
        )
    }
    //If no workouts had been completed, an appropriate message is displayed.
    else{
        return (
            <p>No Workouts Have been Completed by {Ouruser.name}</p>
        )
    }  
}

export default ListCompWorkouts;