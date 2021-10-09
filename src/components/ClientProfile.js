import React from 'react';
const ClientProfile=({client})=>{
    if(client){
        return(
        <div>
            <h1>{client.name}</h1>
            <h2>Trainer ID: {client.trainerId}</h2>
        </div>
    )
    }
    else{
        return(
            <div>
                <p>Please log in to see your information</p>
            </div>
        )
    }
    
}
export default ClientProfile