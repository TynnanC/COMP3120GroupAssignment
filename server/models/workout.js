const mongoose = require("mongoose");

//Workout model for MongoDB. Contains the fields used by workouts.
const workoutSchema = new mongoose.Schema({
    trainerId: {
        type: String,
        required: true,
    },
    workoutName: {
        type: String,
        required: true,
    },
    goalText: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    warmUp: {
        type: [{}],
        required: true,
    },
    warmDown: {
        type: [{}],
        required: true,
    },
    Exercises: {
        type: [Number],
        required: true,
    },
    clientID: {
        type: String,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

// ... mongo relations

module.exports = mongoose.model("workout", workoutSchema);