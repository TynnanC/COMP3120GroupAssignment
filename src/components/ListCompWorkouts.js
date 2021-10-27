
import React from "react";
import unitApi from "../services/uiApi";
import CompletedWorkout from "./CompletedWorkout";



const ListCompWorkouts = ({ Ouruser, completedWO, setCompWO }) => {

    if (!completedWO) {
        unitApi.getCompletedWorkouts(Ouruser)
            .then(response => {
                console.log(response)
                setCompWO(response)
            })
    }

    if (completedWO) {
        return (
            <><div className = "row ninty">
                <div>
                    <ul>
                        {completedWO.map((compWork) => (<CompletedWorkout key={compWork.id} compWork={compWork} Ouruser = {Ouruser}/>))}
                    </ul>
                </div>

            </div>
            </>
        )
    } else
        return (
            <p>No Workouts Have been Completed by {Ouruser.name}</p>
        )

}



export default ListCompWorkouts;