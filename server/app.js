const express = require("express");
const app = express();
const cors = require("cors");
//importing fs module to handle getting data from the json file
const fs = require("fs");
//bycryptlibrary for hashing passwords
const bcrypt = require("bcryptjs");
//jwt to genetare json web token
const jwt = require("jsonwebtoken");
const SECRET = "a secret";
// Load data from JSON file into memory
const newrawData = fs.readFileSync("server/sampleDataFormat.json");
//converts the raw data to json
const appdata = JSON.parse(newrawData);

//Returns the objects belonging to a current user.
const getUser = (username) => {
    return appdata.client.filter((u) => u.username === username)[0];
};
const getTokenFrom = (request) => {
    const authorization = request.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer")) {
        return authorization.substring(7);
    }
    return null;
};

app.use(cors());
app.use(express.json());

app.post("/api/login", async(req, res) => {
    const { username, password } = req.body;
    const client = getUser(username);
    if (!client) {
        return res.status(401).json({ error: "invalid username or pass" });
    }
    if (await bcrypt.compare(password, client.password)) {
        const userForToken = {
            id: client.id,
            username: client.username,
            trainerId: client.trainerId,
        };
        const token = jwt.sign(userForToken, SECRET);
        return res
            .status(200)
            .json({
                token,
                username: client.username,
                name: client.name,
                trainerId: client.trainerId,
                id: client.id,
            });
    } else {
        return res.status(401).json({ error: "invalid username or pass" });
    }
});
//api that responds to the get requests and sends back all information about the trainers
app.get("/api/trainer", (request, response) => {
    response.send(appdata.trainer);
});
//api that responds to the get requests and sends back all information about a specific trainer
app.get(`/api/trainer/:id`, (request, response) => {
    const trainerId = Number(request.params.id);
    response.send(appdata.trainer.filter((u) => u.id === trainerId)[0]);
});
//api that responds to the get requests and sends back all information about the clients
app.get("/api/client", (request, response) => {
    response.send(appdata.client);
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
module.exports = app;