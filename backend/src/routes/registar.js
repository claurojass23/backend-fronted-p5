const{Router} = require('express')
const registro = require('../controllers/registrar')

function registro(app){
    const router = Router()
    app.use('/registro',router)

    router.get('/',(req,res)=>{
      return res.json({
         success:true
      })
    })
}

module.exports = registro