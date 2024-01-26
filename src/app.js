import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({ // url ki form me request ke liye
    extended : true, // objects ke andar bhi object de paate hai 
    limit: "16kb"
}))
app.use(express.static("public"))//files folder store krne ke liye pdf or image mere hi server me , to ek public folder banate hai ki public assets hai
app.use(cookieParser())


export {app}