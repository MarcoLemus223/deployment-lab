const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'd96928518c6e4c87b72c00399b9bed13',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log('Hello world!')

app.use 
    nonExistentFunction();

  

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT ||4006

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})