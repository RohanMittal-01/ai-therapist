//Connect to the database in mongoDB
const mongoose = require('mongoose')
require('dotenv').config()

const mongodbUri = process.env.MONGO_DATABASE

//Send a connection request to the database
const mongoDb = async () => {
    mongoose.connect(mongodbUri).then((res)=>{
        console.log("Connected")
    }).catch((err)=>{
        console.log("Error:-", err)
    })
}

module.exports = mongoDb;