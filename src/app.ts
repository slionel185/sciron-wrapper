import type { Express } from 'express'

import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'

import { env } from '@/utils/env'
import router from '@/routes/router'

const app: Express = express()

app.use(helmet())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/trpc', router)

app.listen(env.PORT, () => {
    console.log(`Server listening on Port: ${env.PORT}`)
})