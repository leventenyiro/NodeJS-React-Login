const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    credentials: true
    //origin: "http://localhost:8080"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./app/routes/user.route")(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})