// Purpose of this file

// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen on the port for incoming requests

// Server is configured in this file
const { app } = require('./server')

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
