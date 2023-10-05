const express = require('express')
const cors = require('cors')
const auth = require('./src/routes/auth')


require('dotenv').config()


const connect = require('./src/config/db')
const server = express()


server.use(cors())

server.use(express.json())

connect('mongodb://127.0.0.1:27017/electronic')
auth(server)

server.get('/',(req,res)=>{
    response.send("API V1.0")
})

server.listen(process.env.PORT,()=>{
 console.log("servidor iniciado en el puerto",process.env.PORT)
})


 
