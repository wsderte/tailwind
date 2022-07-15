// const nodemailer = require('nodemailer')
import nodemailer from 'nodemailer'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'ascellatest@gmail.com',
        pass: 'fljtlwfoarqttunl',
    },
})

transporter
    .sendMail({
        from: '"Your Name" <ascellatest@gmail.com>', // sender address
        to: 'ascellanova@gmail.com,',
        subject: 'Medium @edigleyssonsilva ✔', // Subject line
        text: ' https://www.google.com/search?client=firefox-b-d&q=slack', // plain text body
        html: '<b>https://www.google.com/search?client=firefox-b-d&q=slack!</b>', // html body
    })
    .then((info) => {
        console.log({ info })
    })
    .catch(console.error)

export { transporter }
