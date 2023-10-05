const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')

require('dotenv').config()

const server = express()


server.use(cors())

server.use(express.json())

connect('mongodb://127.0.0.1:27017/electronic')
 /* connect() */


 server.listen(process.env.PORT,()=>{
    console.log("servidor iniciado en el puerto",process.env.PORT)
 })


 
