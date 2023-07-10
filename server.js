const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()
const port = 3001
//SECTION - cors() to accept requests and json() to understand the sent data
app.use(cors())
app.use(express.json())
//SECTION - Connects to the main page
app.use(express.static(path.join(__dirname, '/build')))
//SECTION - Connects to database
require('./config/database')
const {getActiveUsers, createUser, confirmToken} = require('./controllers/activeUser.js')

app.get('/getusers', getActiveUsers)

app.post('/users/createuser', createUser)

app.get('/confirmation/:token', confirmToken)

app.listen(port, ()=>{
    console.log("hey this server working, yayyyy")
})
