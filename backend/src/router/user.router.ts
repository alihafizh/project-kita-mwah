import { Router } from 'express'
import { createUser, getUserId } from '../controller/user.controller'

const userRouter = Router()

userRouter.post('/', createUser)
userRouter.get('/:id', getUserId)

export { userRouter }