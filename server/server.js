const config = require('./utils/config')

//This is the server the API runs on.
const app = require('./app')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})