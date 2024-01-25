import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`) // pura mongodb ka url hai jaha pe connection ho rha hai vo lele , kyuki agr kahi glti se production ki jagah kisi aur server pe connect ho jaaye , kyuki database production ka alag hota hai testing ka alag hota hai to merko pata rahe ki mai konse host pe connect ho ra hu
        

    } catch(error){
        console.error("MONGOdb connection error " , error)
        throw err
    } 
} 

export default connectDB