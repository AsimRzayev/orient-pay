import 'reflect-metadata'

import { NextFunction, Request, Response } from 'express'
import express from 'express'

import { BASE_ROUTER } from './routes'

const app = express()

const port = 4000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

app.use('', BASE_ROUTER)

const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Mock server for orient is running at http://localhost:${port}`)

    process
        .on('exit', () => {
            server.close()
        })
        .on('SIGINT', () => {
            server.close()
            // eslint-disable-next-line no-console
            console.log(
                `Mock server which was running at http://localhost:${port} has been closed.`
            )
        })
})
