import { Router } from 'express'
import { paymentList } from '../../data/payment.js'

export const PaymentRouter = Router()

PaymentRouter.get('/:paymentType/list', (req, res) => {
    let paymentType = req.params.paymentType

    setTimeout(() => res.json(paymentList[paymentType]).sendStatus(200), 2000)
})

PaymentRouter.post('/form', (req, res) => {
    setTimeout(
        () => res.json({ url: 'https://beu.edu.az' }).sendStatus(200),
        2000
    )
})

PaymentRouter.get('/:trans_id/result', (req, res) => {
    setTimeout(
        () =>
            res
                .json({
                    result: 'ERROR',
                    info: {
                        service: 'BAKCELL',
                        amount: 30,
                        cardNumber: '5103071467985607',
                        cardType: 'MasterCard',
                        trans_id: '90',
                    },
                })
                .sendStatus(200),
        2000
    )
})
