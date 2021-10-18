//At this point in time, trainers can't log in as part of the minimal viable product, so the page will display the client's trainer information.

import React from 'react';
import getTraier from '../services/getTrainer'

const TrainerProfile = ({ Ouruser, setTrainer, trainer }) => {

    if (!trainer) {
        getTraier.getTrainer({ Ouruser })
            .then(data => {
                if (data) {
                    console.log(data)
                    setTrainer(data)
                }
            })
        }
        if (trainer) {

            return (
                <div>
                    <h1> Your Trainer's name is: {trainer.trainerName}</h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Please log in to view your trainer's details</p>
                </div>
            )
        }
    }

export default TrainerProfile