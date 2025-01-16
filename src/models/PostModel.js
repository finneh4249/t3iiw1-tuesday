const mongoose = require('mongoose')

// Define the schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

// Create the model
const Post = mongoose.model('Post', PostSchema)

// Export the model
module.exports = Post