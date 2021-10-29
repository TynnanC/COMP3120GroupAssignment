const mongoose = require("mongoose");

//Model for a client to identify them in MongoDB, containing their username and their trainer's ID.
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