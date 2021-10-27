const express = require("express");
const app = express.Router();
const trainer = require("../models/trainer.js");
const workout = require("../models/workout.js");
const client = require("../models/client.js");

//HTTP GET request to api, which return all trainers in the database.
app.get("/api/trainer", async(request, response) => {
    try {
        const allTrainers = await trainer.find({});
        response.json(allTrainers);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//api that responds to the get requests and sends back all information about a specific trainer
app.get(`/api/trainer/:id`, getTrainerByID, (request, response) => {
    try {
        response.json(response.trainer);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//api that responds to the get requests and sends back all information about the clients
app.get("/api/client", (request, response) => {
    try {
        const allClients = await client.find({});
        response.json(allClients);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//API that responds with information for a specific user.
app.get(`/api/client/:id`, (request, response) => {
    const clientId = String(request.params.id);
    response.send(appdata.client.filter((u) => u.id === clientId)[0]);
});
//api that to get all workouts
app.get("/api/workouts", (request, response) => {
    response.send(appdata.workout);
});
//api that responds with a specific workout
app.get("/api/workouts/:id", (request, response) => {
    const id = Number(request.params.id);
    const workout = appdata.workout.filter((w) => w.clientId === id)[0];
    if (workout) {
        response.send(workout);
    } else {
        response.status(404);
        response.send("workout not found");
    }
});
//api that returns a workout for a client
app.get("/api/client/:id/workouts", (request, response) => {
    const id = String(request.params.id);
    for (let i = 0; i < appdata.workout.length; i++) {
        if (appdata.workout[i].clientId === id) {
            response.send(appdata.workout[i]);
            break;
        }
    }
});
//api to records a workout
app.post("/api/workouts", (request, response) => {
    const body = request.body;
    const newWorkout = {
        id: appdata.workout.length,
        clientId: body.clientId,
        trainerId: body.trainerId,
        workoutName: body.workoutName,
        goalText: body.goalText,
        time: body.time,
        frequency: body.frequency,
        warmUp: body.warmUp,
        warmDown: body.warmDown,
        weightExercises: body.weightExercises,
        cardioExercises: body.cardioExercises,
    };
    appdata.workout.push(newWorkout);
    response.json(newWorkout);
});
app.post("/api/updateWorkout", (req, res) => {
    const body = res.body;
    req.completed = true;
    //mongo.save
    const newWorkout = {
        id: appdata.workout.length,
        clientId: body.clientId,
        trainerId: body.trainerId,
        workoutName: body.workoutName,
        goalText: body.goalText,
        time: body.time * 0.05,
        frequency: body.frequency,
        warmUp: body.warmUp,
        warmDown: body.warmDown,
        weightExercises: body.weightExercises,
        cardioExercises: body.cardioExercises,
    };
});

async function getTrainerByID(req, res, next) {
    let findOne;
    try {
        findOne = await trainer.findById(req.params.id);
        if (findOne == null) {
            return res.status(404).json({ message: "Cannot find" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.trainer = findOne;
    next();
}

module.export = app;