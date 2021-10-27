const express = require("express");
const app = express.Router();
const client = require("../models/client.js");

//HTTP GET Request to API, Returns all clients
app.get("/", async(request, response) => {
    try {
        const allClients = await client.find({});
        response.json(allClients);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP GET Request to API, Returns single client
app.get(`/:id`, async(request, response) => {
    const clientId = String(request.params.id);
    try {
        response.send(appdata.client.filter((u) => u.id === clientId)[0]);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

//HTTP POST Request to API, Add New Client to Database
app.post("/", async(request, response) => {
    const newClient = {
        id: request.body.id,
        name: request.body.name,
    };

    try {
        const addClient = await client.save(newClient);
        response.json(addClient);
    } catch (error) {
        response.status(500).json({ message: err.message });
    }
});

module.exports = app;