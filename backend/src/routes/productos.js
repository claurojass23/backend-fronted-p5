const{Router} = require('express')
const producto = require('../controllers/productos')

function producto(app){
    const router = Router()
    app.use('/producto',router)

    router.get('/',(req,res)=>{
      return res.json({
         success:true
      })
    })
}

module.exports = producto