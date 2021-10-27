const express = require("express");
const app = express.Router();
const workout = require("../models/workout.js");

//HTTP GET Request, Returns all workouts
app.get("/", async(request, response) => {
    try {
        const workouts = await workout.find();
        response.json(workouts);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP GET Request, Return one workout
app.get("/:id", getWorkout, (request, response) => {
    try {
        response.json(response.workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//HTTP GET Request, Return all workouts for one client
app.get("/:id/workouts", async(request, response) => {
    const id = String(request.params.id);
    for (let i = 0; i < appdata.workout.length; i++) {
        if (appdata.workout[i].clientId === id) {
            response.send(appdata.workout[i]);
            break;
        }
    }
});

//HTTP POST Request to API, Creates new workout
app.post("/", async(request, response) => {
    const body = request.body;

    console.log("Body req", request.body);
    const newWorkout = new workout({
        trainerId: body.trainerId,
        workoutName: body.workoutName,
        goalText: body.goalText,
        time: body.time,
        frequency: body.frequency,
        warmUp: body.warmUp,
        warmDown: body.warmDown,
        Exercises: body.Exercises,
        clientID: body.clientID,
        completed: body.completed,
    });
    try {
        const addWorkout = await newWorkout.save();
        response.status(201).json(addWorkout);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

app.post("/:id", (request, response) => {
    const body = req.body;
    req.completed = true;
    //mongo.save
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
});

async function getWorkout(req, res, next) {
    let workoutFind;
    try {
        workoutFind = await workout.findById(req.params.id);
        if (workoutFind == null) {
            return res.status(404).json({ message: "Cannot find Workout" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.workout = workoutFind;
    next();
}

module.exports = app;