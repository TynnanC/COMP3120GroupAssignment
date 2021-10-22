const bcrypt =  require('bcryptjs')
const fs = require('fs')

const rawData = fs.readFileSync("server/sampleDataFormat.json")
const data = JSON.parse(rawData)

//Creates a hash of the user's password.
data.client.map(u => {
    const pwcrypt = bcrypt.hash(u.password , 10).then (result => console.log(u.username, result))
})
