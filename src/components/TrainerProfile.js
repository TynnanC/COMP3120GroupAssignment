import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
const TrainerProfile =({trainer})=>{
    return(
        <div>
            <h1>Trainer {trainer.trainerName}</h1>
            <h2>Client ID's:</h2>
            {(trainer.clientsId).map((client)=>
            <ul key={client}>
                <li><Link to={`/api/client/${client}`}>{client}</Link></li>
            </ul>)}
        </div>
    )
}
export default TrainerProfile