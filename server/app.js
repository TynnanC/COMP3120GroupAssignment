const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const clientRouter = require("./routes/clientRoute.js");
const loginRouter = require("./routes/loginRoute.js");
const trainerRouter = require("./routes/trainerRoute.js");
const workoutRouter = require("./routes/workoutRoute.js");

// production build option
app.use(express.static("build"));

mongoose.connect(
    "mongodb+srv://dbUSER:KTaqV9o2f9ftwdBq@appdb.zlb9u.mongodb.net/appDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
app.use(cors());
app.use(express.json());
//Returns the objects belonging to a current user.
app.use("/login", loginRouter);
app.use("/client", clientRouter);
app.use("/workout", workoutRouter);
app.use("/trainer", trainerRouter);

module.exports = app;