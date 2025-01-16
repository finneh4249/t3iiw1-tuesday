const { PostModel } = require('../models/PostModel')

async function createPost (title, body) {
  const post = await PostModel.create({
    title,
    body
  })

  return post
}

async function getPost () {}

async function getPosts () {}

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
