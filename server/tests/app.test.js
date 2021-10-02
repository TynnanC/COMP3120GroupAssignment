/**
 * @jest-environment node
 */

const mongoose = require('mongoose')
const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')

const api = supertest(app)

const sampleData = (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)
   // use a for loop rather than map because we want await
   for(let i=0; i<data.units.length; i++) {
    const record = data.units[i]
    const l = new Unit(record)
    await l.save() 
}
}

describe('api', () => {
    beforeEach(async () => {
        sampleData("server/units.json")
})

test('get request returns JSON', async () => {
    await api.get('/api/units')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterEach(async () => {
    await Unit.deleteMany({})
})

})