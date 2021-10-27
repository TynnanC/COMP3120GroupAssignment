const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
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
module.exports = mongoose.model("trainer", trainerSchema);