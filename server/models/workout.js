import { Schema, model } from "mongoose";

const workoutSchema = new Schema({
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
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    clientID: {
        type: String,
    },
});

// ... mongo relations 

export default model("workout", workoutSchema);