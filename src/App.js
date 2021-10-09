import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ClientProfile from './components/ClientProfile.js';
import TrainerProfile from './components/TrainerProfile.js';
import  LoginForm from  "./components/LoginForm.js"

const App = () => {
  
  const  [user, setUser] = useState(null)
  const [trainer, setTrainer]=useState(null)
  const [errorMessage, setErrorMessage]=useState('')

  return (
    <div>
      <LoginForm setUser = {setUser} user = {user} setTrainer={setTrainer} trainer={trainer} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      {/*Below is the idea of how the profiles will be reached from the home screen*/}
       <Router>
         <div>
           <Link to="/api/client">Client</Link>
           <Link to="/api/trainer">Trainer</Link>
           </div>
         <Switch>
           <Route path="/api/client">
             <ClientProfile client={user}/>
           </Route>
           <Route path="/api/trainer">
             <TrainerProfile trainer={trainer} client={user}/>
           </Route>
         </Switch>
        </Router>
      </div>
  )
}


export default App;
