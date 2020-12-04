const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require("./routes/routes")
const cors = require("cors")


//initialising Express
const app = express()

//activating the dotenv package
dotenv.config()

//connecting to mongoDb
mongoose.connect(process.env.DATABASE_ACCESS,{ useUnifiedTopology: true },()=>{
    console.log("database connected")
})

//body parser
app.use(express.json())
//middlewares
app.use("/app",routesUrls)
//allow cross-origin requests
app.use(cors())




app.listen(4000,()=>{
    console.log("Server is running")
})