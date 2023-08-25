// connect env file
require('dotenv').config()

//import router
const router=require('./routes/router')


// import express
const express=require('express')

// import cors to connect frontend
const cors=require('cors')

//import dbconnection file
require('./connection')

//server
const server=express()

//connect frontend
server.use(cors())

//convert json to javascript(data from frontend)
server.use(express.json())

// server to use router file
server.use(router)


// to run server
const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`ems started at port ${port}`);
})