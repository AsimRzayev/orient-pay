import { Router } from 'express'

import { PaymentRouter } from './payment'

export const V1_ROUTER = Router().use('/payments', PaymentRouter)
