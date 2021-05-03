const express = require('express')
const authController = require('../controllers/authController')
const AuthRouter = express.Router()

AuthRouter.route('/signUp').post(authController.signUp)
AuthRouter.route("/login").post(authController.login)
module.exports = AuthRouter