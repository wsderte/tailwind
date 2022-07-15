import express from 'express'
import bodyParser from 'body-parser'

const indexRouter = express.Router()

indexRouter.use(bodyParser.json())

indexRouter
    .route('/')
    .get((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('INDEX router  GET')
    })
    .post((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('INDEX router  POST: ' + req.body)
    })

export default indexRouter
