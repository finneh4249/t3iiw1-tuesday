// Purpose:

// Configure the server
// Defining routes, middlewares, CORS, debug logger, db connections, etc.

const express = require('express')

//Instance of express for config
const app = express()

// Server app config goes ehre
//
// app.verb(path, callback)
app.get('/', (req, res) => {
    res.send('Hello Potato World!')
})

module.exports = { app }
