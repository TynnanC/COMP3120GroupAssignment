import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TrainerProfile from './components/TrainerProfile.js';
import ClientProfile from './components/ClientProfile.js';

const data={
  trainer:
      {
          "id":0,
          "trainerName": "John Smith",
          "clientsId":[0]
      },
      client:{
        "id":0,
        "name":"Bob Bobalooba",
        "password":"bob",
        "trainerId":0
      } 
}

const App = () => {
  return (
    <div>
      {/*Below is the idea of how the profiles will be reached from the home screen*/}
       <Router>
         <div>
           <Link to="/api/trainer/0">Trainer</Link>
           <Link to="/api/client/0">Client</Link>
           </div>
         <Switch>
           <Route path="/api/trainer/0">
             <TrainerProfile trainer={data.trainer}/>
           </Route>
           <Route path="/api/client/0">
             <ClientProfile client={data.client}/>
           </Route>
         </Switch>
        </Router>
      </div>
  )
}


export default App;
