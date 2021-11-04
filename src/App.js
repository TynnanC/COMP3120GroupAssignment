import React, { useState, useEffect } from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ClientProfile from "./components/ClientProfile.js";
import TrainerProfile from "./components/TrainerProfile.js";
import DoWorkout from "./components/DoWorkout.js";
import Auth0Login from "./components/Auth0Login.js";
import { useAuth0 } from "@auth0/auth0-react";
import MainView from "./components/MainView";
//The main application component.
const App = () => {
  //Auth0 hook tracks if a user is authenticated or not.
  const { isAuthenticated } = useAuth0();
  //State variables can be changed throughout the applications lifecycle. These track the current user, the user's trainer, a workout they can complete, and completed workouts.
  const [Ouruser, setourUser] = useState("");
  const [trainer, setTrainer] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [completedWO, setCompWO] = useState(null);
  return <MainView />;
};

export default App;
