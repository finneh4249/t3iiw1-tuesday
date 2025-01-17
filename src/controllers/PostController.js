const { PostModel } = require('../models/PostModel')

async function createPost (title, body) {
  const post = await PostModel.create({
    title,
    body
  })

  return post
}

async function getPost (query) {
  const post = await PostModel.findOne(query)

  return post
}

async function getPosts (query) {
  const posts = await PostModel.find(query)

  return posts
}

async function updatePost () {}

async function updatePosts () {}

async function deletePost () {}

async function deletePosts () {}

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  updatePosts,
  deletePost,
  deletePosts
}
