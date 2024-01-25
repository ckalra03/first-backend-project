// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()


// import mangoose from "mongoose";
// import {DB_NAME} from "./constants";
// import express from "express"
// const app = express()



// (async() =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.log("application not able to talk to database :", error);
//             throw error
//         }) //database to connect ho gya hai but kya pata express baat nai kr paa rha 

//         app.listen(process.env.PORT, () =>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch(error){
//         console.error("ERROR :" , error)
//         throw err
//     }    
// })()
// one of the approach but bad one 
// function connectDB(){}

// connectDB()