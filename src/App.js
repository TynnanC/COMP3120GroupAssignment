import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

const App = () => {
  return (
    <div className='App'>
      <header className="App-header">
      <p>COMP3120: Advanced Web Development</p>
      </header>
      {/* use a table to make the display neater */}
      <table className='App-table'>
        <thead>
          <tr>
        <th>Unit Code</th>
        <th>Unit Title</th>
        <th>Unit Offered</th>
        </tr>
        </thead>
        <tbody>
      {/* Use map method to work with array */}
      {units.map(item => (
        <Unit key = {item.id} unitCode = {item.code} unitTitle = {item.title} unitOffering = {item.unitOffering}/>
      ))}
      </tbody>
      </table>
      <form onSubmit={addUnit}>
         <input value={newUnitCode}
         onChange={handleNewUnitCodeChange}/>
         <input
         value={newUnitTitle}
         onChange={handleNewUnitTitleChange}/>
         <input
         value={newUnitOffering}
         onChange={handleNewUnitOfferingChange}/>
         <button type="submit"> Add Unit </button>
       </form>

        {/*Below is the idea of how the profiles will be reached from the home screen*/}
       {/*
       <Router>
         <Switch>
           <Route path="/">
             <TrainerProfile trainer={data.trainer}/>
           </Route>
           <Route path="/">
             <ClientProfile client={data.client}/>
           </Route>
         </Switch>
        </Router>*/}
        {/*These are being displayed directly in the home screen for development purposes*/}
        <TrainerProfile trainer={data.trainer}/>
        <ClientProfile client={data.client}/>
       
  </div>

  

  )
}


export default App;
