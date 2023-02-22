import { Router } from 'express'
import { paymentList, paymentTypes } from '../../data/payment'

export const PaymentRouter = Router()

PaymentRouter.get('/:paymentType/list', (req, res) => {
    let paymentType = req.params.paymentType as paymentTypes

    setTimeout(() => res.json(paymentList[paymentType]).sendStatus(200), 2000)
})

PaymentRouter.post('/form', (req, res) => {
    setTimeout(
        () => res.json({ url: 'https://beu.edu.az' }).sendStatus(200),
        2000
    )
})
