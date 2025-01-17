const mongoose = require('mongoose')
const { PostModel } = require('../models/PostModel')

async function dbConnect () {
  try {
    let databaseUrl =
      process.env.DATABASE_URL ??
      `mongodb://localhost:27017/${process.env.npm_package_name}`
    await mongoose.connect(databaseUrl)
    console.log(databaseUrl)
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
  }
}

async function dbDisconnect () {
  try {
    await mongoose.disconnect()
    console.log('Database disconnected successfully')
  } catch (error) {
    console.error('Error disconnecting from the database')
    console.error(error)
  }
}

async function dbDrop () {
  try {
    await mongoose.connection.db.dropDatabase()
    console.log('Database dropped successfully')
  } catch (error) {
    console.error('Error dropping the database')
    console.error(error)
  }
}

module.exports = { dbConnect, dbDisconnect, dbDrop }
