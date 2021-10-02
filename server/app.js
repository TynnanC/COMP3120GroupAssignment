const express = require('express')
const app = express()
const cors = require('cors')



app.use(cors())
app.use(express.json())


let units = [
    {id: 0, code: "COMP1010", title:"Fundamentals of Computer Science", offering: ["S1", "S2"]},
    {id: 1, code: "COMP1750", title:"Introduction to Business Information Systems", offering: ["S1"]},
    {id: 2, code: "COMP2110", title:"Web Technology", offering: ["S1", "S2"]},
    {id: 3, code: "COMP2750", title:"Applications Modelling and Development", offering: ["S1"]},
    {id: 4, code: "MMCC2045", title:"Interactive Web Design", offering: ["S2"]},
    {id: 5, code: "COMP3120", title:"Advanced Web Development", offering: ["S2"]},
    {id: 6, code: "COMP3130", title:"Mobile Application Development", offering: ["S1"]}
  ]




app.get('/', (request, response) => {
    response.send('<h1> This is the webserver </h1>')
})

app.get('/api/units', (request, response) => {
    response.json(units)
})

app.get('/api/units/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log('the passed id is: ', id)
    const unit = units.find(unit => {
        console.log(unit.id, typeof unit.id, id, typeof id, unit.id === id)
        return unit.id === id
    })
    console.log(unit)
    response.json(unit)

})




    module.exports = app