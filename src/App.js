import React, { useState, useEffect } from "react";
//import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ClientProfile from './components/ClientProfile.js';
import TrainerProfile from './components/TrainerProfile.js';
//import  LoginForm from  "./components/LoginForm.js";
import DoWorkout from "./components/DoWorkout.js";
import Auth0Login from "./components/Auth0Login.js"
import { useAuth0 } from "@auth0/auth0-react";
//import unitApi from "./services/uiApi";

//The main application component.
const App = () => {
  //Auth0 hook tracks if a user is authenticated or not.
  const { isAuthenticated } = useAuth0()
  //State variables can be changed throughout the applications lifecycle.
  const [Ouruser, setourUser] = useState('')
  const [trainer, setTrainer] = useState(null)
  const [workout, setWorkout] = useState(null)
  return (
    <div>
      <Router>
        <div>
          {/*Below is the Login form using Auth0*/}
          <Auth0Login setourUser={setourUser} setTrainer={setTrainer} trainer={trainer} />
          {/*Navigation bar*/}
          {isAuthenticated && (
            <>
              <Link to="/api/client">Client</Link>
              <Link to="/api/trainer">Trainer</Link>
              <Link to="/api/doWorkout">Workout</Link>
            </>
          )}
        </div>
        <Switch>
          {/*The switch defines the routes and URL paths used.*/}
          <Route path="/api/client">
            <ClientProfile setourUser={setourUser} Ouruser={Ouruser} />
          </Route>
          <Route path="/api/trainer">
            <TrainerProfile setourUser={setourUser} setTrainer={setTrainer} trainer={trainer} Ouruser={Ouruser} />
          </Route>
          <Route path="/api/doWorkout">
            <DoWorkout Ouruser={Ouruser} workout={workout} setWorkout={setWorkout} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
