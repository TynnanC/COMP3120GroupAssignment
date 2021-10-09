//At this point in time, trainers can't log in as part of the minimal viable product, so the page will display the client's trainer information.

import React from 'react';
const TrainerProfile =({trainer, client})=>{
    if(client){
        return(
        <div>
            <h1> Your Trainer's name is: {trainer.trainerName}</h1>
        </div>
    )
    }
    else{
        return(
            <div>
                <p>Please log in to view your trainer's details</p>
            </div>
        )
    }
}
export default TrainerProfile