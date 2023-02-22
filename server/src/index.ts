import 'reflect-metadata'

import { NextFunction, Request, Response } from 'express'
import express from 'express'

import { BASE_ROUTER } from './routes'

const app = express()

const port = 4000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.use('', BASE_ROUTER)
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Mock server for orient is running at http://localhost:${port}`)
})
