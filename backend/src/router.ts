import {Request, Response, Router} from "express"
import { userRouter } from "./router/user.router"

const router = Router()

router.get('/' ,(req:Request, res: Response) => {
    res.status(200).send({
        status: "im fine, ok kencana",
        message: 'fuck this shit bruh!'
    })
})

router.use('/users', userRouter)

export default router
