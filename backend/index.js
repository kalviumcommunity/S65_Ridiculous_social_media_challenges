const express = require('express')
require('dotenv').config();
const app = express()
const PORT = process.env.PORT

app.get('/ping',(req,res)=>{
    try {
        res.status(200).send("Ping Working Fine")
    } catch (error) {
        res.status(500).json({
            error:"Internal Server Error",
            message:"Ping route is not Working Fine",
            description:error.message
        })
    }
})

app.listen(PORT,(req,res)=>{
    try {
        console.log(`Server is running at port ${PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})