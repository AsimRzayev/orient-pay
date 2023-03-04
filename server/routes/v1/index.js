import { Router } from 'express'
import { AuthRouter } from './auth.js'

import { PaymentRouter } from './payment.js'
import { UserRouter } from './user.js'

export const V1_ROUTER = Router()
    .use('/payments', PaymentRouter)
    .use('/auth', AuthRouter)
    .use('/user', UserRouter)
