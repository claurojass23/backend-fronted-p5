const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('servicio ok')

})

module.exports= router