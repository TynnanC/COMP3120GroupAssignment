import { Schema, model } from "mongoose";

const trainerSchema = new Schema({
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
export default model("trainer", trainerSchema);