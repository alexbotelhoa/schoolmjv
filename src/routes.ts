import express from 'express'

import { UserController } from './controllers/user.controller'

export const routes = express.Router()

routes.get('/users', UserController().showAllUsers)
routes.get('/user/:id', UserController().selectUser)
routes.post('/user', UserController().createUser)
routes.put('/user/:id', UserController().updateUser)
routes.delete('/user/:id', UserController().deleteUser)
