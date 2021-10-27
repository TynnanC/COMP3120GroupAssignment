const express = require("express");
const app = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = "a secret";

const getUser = (username) => {
    return appdata.client.filter((u) => u.username === username)[0];
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
    const client = getUser(username);
    if (!client) {
        return res.status(401).json({ error: "invalid username or pass" });
    }
    if (await bcrypt.compare(password, client.password)) {
        const userForToken = {
            id: client.id,
            username: client.username,
            trainerId: client.trainerId,
        };
        const token = jwt.sign(userForToken, SECRET);
        return res.status(200).json({
            token,
            username: client.username,
            name: client.name,
            trainerId: client.trainerId,
            id: client.id,
        });
    } else {
        return res.status(401).json({ error: "invalid username or pass" });
    }
});

module.exports = app;