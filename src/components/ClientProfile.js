import React from 'react';
const ClientProfile=({client})=>{
    return(
        <div>
            <h1>{client.name}</h1>
            <h2>Trainer ID: {client.trainerId}</h2>
        </div>
    )
}
export default ClientProfile