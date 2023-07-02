//Connect to the database in mongoDB
const mongoose = require('mongoose')
const mongodbUri = "mongodb+srv://flat-chat:trying123@db.oboqhty.mongodb.net/?retryWrites=true&w=majority"

//Send a connection request to the database
const mongoDb = async () => {
    mongoose.connect(mongodbUri).then((res)=>{
        console.log("Connected")
    }).catch((err)=>{
        console.log("Error:-", err)
    })
}

module.exports = mongoDb;