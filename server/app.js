import express from 'express'
import cors from 'cors'

import { connect } from './db.js'

const app = express()
app.use(express.json())
app.use(cors())

const port = 8080
let db

connect.connectToDb((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log('listening on ' + port)
        })
        db = connect.getDb()
    }
})

app.get('/', (req, res) => {
    db.collection('card')
        .find({})
        .toArray()
        .then((cards) => {
            res.status(200).json(cards)
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error: could no fetch data from /' })
        })
})

app.post('/', (req, res) => {
    console.log('POST', req.body.email)
})

// app.use('/birds', birds);
