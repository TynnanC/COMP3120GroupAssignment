import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import ClientProfile from './components/ClientProfile.js';
import TrainerProfile from './components/TrainerProfile.js';
import  LoginForm from  "./components/LoginForm.js";
import DoWorkout from "./components/DoWorkout.js";

const App = () => {
  
  const  [user, setUser] = useState(null)
  const [trainer, setTrainer]=useState(null)
  const [errorMessage, setErrorMessage]=useState('')
  const [workout, setWorkout]=useState(null)

  return (
    <div>
      <LoginForm setUser = {setUser} user = {user} setTrainer={setTrainer} trainer={trainer} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      {/*Below is the idea of how the profiles will be reached from the home screen*/}
       <Router>
         <div>
           <Link to="/api/client">Client</Link>
           <Link to="/api/trainer">Trainer</Link>
           <Link to="/api/doWorkout">Workout</Link>
          </div>
         <Switch>
           <Route path="/api/client">
             <ClientProfile client={user}/>
           </Route>
           <Route path="/api/trainer">
             <TrainerProfile trainer={trainer} client={user}/>
           </Route>
           <Route path="/api/doWorkout">
            <DoWorkout client={user} workout={workout} setWorkout={setWorkout}/>
           </Route>
         </Switch>
        </Router>
      </div>
  )
}


export default App;
