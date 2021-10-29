const mongoose = require("mongoose");

//Trainer model for MongoDB. Contains their Id, their name, and a list of clients they are assigned to.
const trainerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    clients: {
        type: [String],
    },
});
module.exports = mongoose.model("trainer", trainerSchema);