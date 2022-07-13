const { Router} = require('express')

const UserController = require('../Controller/user.Controller')

const userRoutes = Router()


const userController = new UserController();

userRoutes.post('/', userController.create)

module.exports = userRoutes;
