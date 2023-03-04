import { Router } from 'express'
export const AuthRouter = Router()

AuthRouter.post('/login', (req, res) => {
    res.json({
        token: 'dasdasdsaasd',
    }).sendStatus(200)
})

AuthRouter.post('/logout', (req, res) => {
    setTimeout(() => {
        res.sendStatus(200)
    }, 2000)
})
