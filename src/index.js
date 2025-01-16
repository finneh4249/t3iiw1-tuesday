// Purpose of this file

// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen on the port for incoming requests

// Server is configured in this file
require('dotenv').config()
const { app } = require('./server')
const { dbConnect } = require("./utils/database.js");

const PORT = process.env.PORT ?? 3000

app.listen(PORT, async () => {
    await dbConnect();
    console.log(`Server is running on http://localhost:${PORT}`)
})
