const { db } = require('../models/PostModel')
const {dbConnect, dbDisconnect, dbDrop} = require('./database')

async function drop(){
    await dbDrop()
    await dbDisconnect()
    console.log('Database dropped and disconnected successfully')
}

dbConnect().then(()=>{
    console.log('Dropping Database')
    drop()
})