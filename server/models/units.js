const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://blueatria-weekly:${password}@cluster0.qze8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})

const unitSchema = new mongoose.Schema({
  code: String,
  title: String,
  offering: [],
})

const Unit = mongoose.model('Unit', unitSchema)

const unit = new Unit({
  code: 'COMP1000',
  title: 'A new unit',
  offering: ['S1'],
})

unit.save().then(result => {
  console.log('unit saved!')
  mongoose.connection.close()
})