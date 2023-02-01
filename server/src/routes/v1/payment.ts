import { Router, Request } from 'express'
import { DMobilePaymentList } from '../../data/payment'

export const PaymentRouter = Router()

PaymentRouter.get('/mobile/list', (req, res) => {
    setTimeout(() => res.json(DMobilePaymentList).sendStatus(200), 2000)
})

PaymentRouter.get('/mobile/:type', (req: Request, res) => {
    const type = req.params.type
    setTimeout(
        () =>
            res.send(
                DMobilePaymentList.find(
                    (x) => x.provider.toLowerCase() === type
                )
            ),
        2000
    )
})
