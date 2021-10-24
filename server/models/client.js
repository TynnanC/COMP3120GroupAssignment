import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    id: {
        type: String,
        requried: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    trainer: {
        type: String,
        required: true,
    },
});

export default model("client", clientSchema);