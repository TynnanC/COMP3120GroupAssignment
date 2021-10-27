const express = require("express");
const app = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = "a secret";
const client = require("../models/client.js");

const getUser = (username) => {
    return client.find({ username: username });
};

const getTokenFrom = (request) => {
    const authorization = request.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer")) {
        return authorization.substring(7);
    }
    return null;
};

app.post("/", async(req, res) => {
    const { username, password } = req.body;
    const checkClient = getUser(username);
    if (!checkClient) {
        return res.status(401).json({ error: "invalid username or pass" });
    }
    if (await bcrypt.compare(password, checkClient.password)) {
        const userForToken = {
            id: checkCcheckCient.id,
            username: checkClient.username,
            trainerId: checkClient.trainerId,
        };
        const token = jwt.sign(userForToken, SECRET);
        return res.status(200).json({
            token,
            username: checkClient.username,
            name: checkClient.name,
            trainerId: checkClient.trainerId,
            id: checkClient.id,
        });
    } else {
        return res.status(401).json({ error: "invalid username or pass" });
    }
});

module.exports = app;