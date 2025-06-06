const { Router } = require('express')
const { login, signUp } = require('../controllers/auth')

const auth = (app)=>{
    const router = Router()
    app.use('/app/auth', router)
    router.post('/login', login)
    router.post('/signup', signUp)
}

module.exports = auth

