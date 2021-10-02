/*
Eric Korhonen - 44828225
Created 5/8/21

My First React App ;-)

*/

import React, {useState, useEffect} from 'react';
import './App.css';
import unitService from './services/units'

const App = () => {

 const Unit = (props) => {
   const [unitTitle, changeCase] = useState(props.unitTitle)
   /*functions to fold case*/
   const foldUpper = () => changeCase(unitTitle.toUpperCase())
   const foldLower = () => changeCase(unitTitle.toLowerCase())
   /* build table rows */
   return (
       <tr>
         <td>{props.unitCode}</td><td>{unitTitle}</td><td>{props.unitOffering}</td>
       <td><button onClick = {foldUpper} >Upper Case Title</button><button onClick = {foldLower} >Lower Case Title</button></td>
       </tr>
       
   )
 }
  
 const [units, setUnits] = useState([])

useEffect(() => {
  console.log("effect is being run")
  unitService
    .getAll()
  .then(response => {
    console.log("we have a response", response)
    setUnits(response.data)
  })
},
[])

const [newUnitCode, setNewUnitCode] = useState('a new unit code')
const [newUnitTitle, setNewUnitTitle] = useState('a new unit title')
const [newUnitOffering, setNewUnitOffering] = useState(['S1'])

const handleNewUnitCodeChange = (event) => {
  console.log(event.target.value)
  setNewUnitCode(event.target.value)
}

const handleNewUnitTitleChange = (event) => {
  console.log(event.target.value)
  setNewUnitTitle(event.target.value)
}

const handleNewUnitOfferingChange = (event) => {
  console.log(event.target.value)
  setNewUnitOffering(event.target.value)
}

const addUnit = (event) => {
  event.preventDefault()
  console.log('button clicked',event.target)
  let newUnitId = units.length
  const unitObject = {
    id: newUnitId,
    code: newUnitCode,
    title: newUnitTitle,
    offering: newUnitOffering
  }
  setUnits(units.concat(unitObject))
  setNewUnitCode('newunit')
  setNewUnitTitle('a new title')
  setNewUnitOffering('')
  console.log('units object',units)
}

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
  </div>

  )
}


export default App;