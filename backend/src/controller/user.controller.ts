import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {
    try {
        const result = await prisma.user.create({
            data: req.body
        })
        res.status(201).send({
            status: "oke",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            status: "error",
            message: err
        })
    }

}

export const getUser = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 100

        const users = await prisma.user.findMany({
            skip: (page - 1) * limit,
            take: limit
        })
        const countUser = await prisma.user.count()
        res.status(200).send({
            status: 'ok',
            countUser,
            page,
            users
        })
    } catch (err) {
        res.status(400).send({
            status: 'error',
            message: err
        })
    }
}


export const getUserId = async (req: Request, res: Response) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                id: +req.params.id
            }
        })
        res.status(200).send({
            status: "ok",
            result
        })

    } catch (err) {
        res.status(400).send({
            status: "error",
            message: err
        })
    }
}