const mongoose = require('mongoose')

// Define the schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 10
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Create the model
const PostModel = mongoose.model('Post', PostSchema)

// Export the model
module.exports = {PostModel}