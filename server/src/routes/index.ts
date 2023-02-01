import { Router } from 'express'

import { V1_ROUTER } from './v1'

export const BASE_ROUTER = Router().use('/api/', V1_ROUTER)
