import express from 'express'
const bodyParser = require('body-parser')
const { transporter } = require('../mailer/nodemailer')

const cardsRouter = express.Router()

cardsRouter.use(bodyParser.json())

cardsRouter
    .route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        next()
    })
    .post((req, res, next) => {
        transporter
            .sendMail({
                from: '"Your Name" <ascellatest@gmail.com>',
                to: 'ascellanova@gmail.com,',
                subject: 'Medium @edigleyssonsilva ✔',
                text: ' https://www.google.com/search?client=firefox-b-d&q=slack',
                html: '<b>https://www.google.com/search?client=firefox-b-d&q=slack!</b>',
            })
            .then((info) => {
                console.log({ info })
            })
            .catch(console.error)

        res.end('Will add the dish: ' + req.body)
    })

export default cardsRouter
