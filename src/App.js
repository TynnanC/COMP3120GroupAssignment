import React, { useState, useEffect } from "react";
//import Sidebar from "./components/Sidebar";
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
//import  LoginForm from  "./components/LoginForm.js";
import DoWorkout from "./components/DoWorkout.js";
import Auth0Login from "./components/Auth0Login.js";
import { useAuth0 } from "@auth0/auth0-react";
//import unitApi from "./services/uiApi";

//The main application component.
const App = () => {
  //Auth0 hook tracks if a user is authenticated or not.
  const { isAuthenticated } = useAuth0();
  //State variables can be changed throughout the applications lifecycle.
  const [Ouruser, setourUser] = useState("");
  const [trainer, setTrainer] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [completedWO, setCompWO] = useState(null)

  console.log({ Ouruser });
  return (
    <div>
      <Router>
        <div class="row" id="navBar">
          {/*Navigation bar*/}
          {isAuthenticated && (
            <>
              <Link to="/api/client" class="two columns">
                Client
              </Link>
              <Link to="/api/trainer" class="two columns">
                Trainer
              </Link>
              <Link to="/api/doWorkout" class="two columns">
                Workout
              </Link>
            </>
          )}
          {/*Below is the Login form using Auth0*/}
          <Auth0Login 
            setTrainer={setTrainer} 
            trainer={trainer}
             />
        </div>
        <Switch>
          {/*The switch defines the routes and URL paths used.*/}
          <Route path="/api/client">
            <ClientProfile 
              Ouruser={Ouruser} 
              setourUser={setourUser}
              completedWO ={completedWO}
              setCompWO = {setCompWO}
               />
          </Route>
          <Route path="/api/trainer">
            <TrainerProfile
              setourUser={setourUser}
              setTrainer={setTrainer}
              trainer={trainer}
              Ouruser={Ouruser}
            />
          </Route>
          <Route path="/api/doWorkout">
            <DoWorkout
              Ouruser={Ouruser}
              setourUser={setourUser}
              workout={workout}
              setWorkout={setWorkout}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
