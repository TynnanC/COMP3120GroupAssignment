const express = require("express");
const app = express.Router();
const client = require("../models/client.js");

//HTTP GET Request to API, Returns all clients
app.get("/", async(request, response) => {
    try {
        const allClients = await client.find();
        response.json(allClients);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP GET Request to API, Returns single client
app.get(`/:id`, getClient, async(request, response) => {
    try {
        response.send(response.client);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP POST Request to API, Add New Client to Database
app.post("/", async(request, response) => {
    let findUser = await client.find({ username: request.body.username });
    if (findUser.username === request.body.username) {
        return response.status(201).json({ message: "User already added." });
    }
    const newClient = new client({
        username: request.body.username,
        trainerID: request.body.trainerID,
    });
    try {
        const addClient = await client.save(newClient);
        response.json(addClient);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

//Function to find a client in the database that has the same Id as the requested client's Id.
async function getClient(req, res, next) {
    let clientFind;
    try {
        clientFind = await client.findById(req.params.id);
        if (clientFind == null) {
            return res.status(404).json({ message: "Cannot find client" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.client = clientFind;
    next();
}

module.exports = app;