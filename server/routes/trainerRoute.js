const express = require("express");
const app = express.Router();
const trainer = require("../models/trainer.js");

//HTTP GET request to api, which return all trainers in the database.
app.get("/", async(request, response) => {
    try {
        const allTrainers = await trainer.find({});
        response.json(allTrainers);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP GET Request to api, returns data about an unique trainer
app.get(`/:id`, getTrainer, async(request, response) => {
    try {
        response.json(response.trainer);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP PATCH Request to API, Updates Details For Trainer
app.patch(`/:id`, getTrainer, async(request, response) => {
    try {
        response.json(response.trainer);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

async function getTrainer(req, res, next) {
    let trainerFind;
    try {
        trainerFind = await trainer.findById(req.params.id);
        if (trainerFind == null) {
            return res.status(404).json({ message: "Cannot find Trainer" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.trainer = trainerFind;
    next();
}

module.exports = app;