const {createPost, getPost} = require('../controllers/PostController')
const {dbConnect, dbDisconnect} = require('./database')

async function seed () {
  await dbConnect()
  console.log('Seeding posts')

  await createPost('First Post', 'This is the first post')
  const post = await getPost({title: 'First Post'})
  console.log('First post created:', post)

  console.log('Posts seeded successfully')

  await dbDisconnect()

  console.log('Database disconnected')
}

seed()