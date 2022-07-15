import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { config } from './config.js'

import indexRouter from './routes/indexRouter.js'
import cardRouter from './routes/cardRouter.js'

const app = express()
app.use(express.json())
app.use(cors())

const port = config.port
const url = config.mongoUrl

const connect = mongoose.connect(url)

connect
    .then((db) => {
        console.log('DB connected correctly to server')
    })
    .catch((err) => {
        console.log('DB connect error', err)
    })

app.use('/', indexRouter)
app.use('/card', cardRouter)

app.listen(port, () => {
    console.log('listening on ' + port)
})
