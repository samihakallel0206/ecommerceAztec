const express = require('express')
const { register, login } = require('../controllers/auth.controllers')
const { registerValidation, validation, loginValidation } = require('../middleware/validator')
const isAuth = require('../middleware/isAuth')

const router = express.Router()

//just a test of modules(files)
router.get('/test', (req, res) => {
    res.status(200).json('This is a test')
})

// register == sign-up
router.post('/register', registerValidation(), validation, register)

//login == sign-in
router.post('/login', loginValidation(), validation, login)

//current
router.get('/current', isAuth, (req, res) => {
    res.json(req.user)
})





module.exports = router