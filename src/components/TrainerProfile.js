import React from 'react';
const TrainerProfile =({trainer})=>{
    console.log(trainer)
    return(
        <div>
            <h1>Trainer {trainer.trainerName}</h1>
            <h2>Clients:</h2>
            {(trainer.clientsId).map((client)=>
            <ul key={client}>
                <li>{client}</li>
            </ul>)}
        </div>
    )
}
export default TrainerProfile