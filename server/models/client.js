const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
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

module.exports = mongoose.model("client", clientSchema);