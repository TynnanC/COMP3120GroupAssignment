const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    trainerID: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("client", clientSchema);