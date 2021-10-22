import React from 'react';
import getTrainer from '../services/getTrainer';
import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";

//If the user is authenticated, their trainer's information will be displayed.
const TrainerProfile = ({ setourUser, Ouruser, setTrainer, trainer }) => {
    //Checks if the trainer state is empty and the user is authenticated, then request the user's trainer information.
    const { user } = useAuth0()
    //Requests the user's information and trainers information.
    if(!trainer && !Ouruser){
        unitApi.getClientById(user.email)
        .then(data => {
            setourUser(data)
        })
        getTrainer.getTrainer({ Ouruser })
        .then(data => {
            if (data) {
                setTrainer(data)
            }
        })
    }
    //Requests the trainers information if the user information is already received.
    if(!trainer && Ouruser) {
        getTrainer.getTrainer({ Ouruser })
        .then(data => {
            if (data) {
                setTrainer(data)
            }
        })
    }
    //If a trainer object is not null and the user is authenticated, the information is displayed.
    if (trainer && Ouruser) {
        return (
            <div>
                <h1> Your Trainer's name is: {trainer.trainerName}</h1>
            </div>
        )
    }
    //In all other circumstances, a generic login message is displayed suggesting the user to log in.
    else {
        return (
            <div>
                <p>Please log in to view your trainer's details</p>
            </div>
        )
    }
}
export default TrainerProfile