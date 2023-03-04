import { Router } from 'express'
export const UserRouter = Router()

UserRouter.get('', (req, res) => {
    res.json({
        firstName: 'Samir',
        lastName: 'Hasanov',
        role: 'individual',
    })
})
