import express from 'express'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'

import { Card } from '../models/cards.js'

const cardRouter = express.Router()

cardRouter.use(bodyParser.json())

cardRouter
    .route('/')
    .get((req, res, next) => {
        Card.find({})
            .then((card) => {
                console.log(card)
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(card)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({
                    error: 'Error: could no GET data from /card',
                })
                next(err)
            })
    })
    .post((req, res, next) => {
        Card.create(req.body)
            .then((card) => {
                console.log('CARD router POST ', card)
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(card)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({
                    error: 'Error: could no POST data from /card',
                })
                next(err)
            })
    })
    .put((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
    })
    .delete((req, res, next) => {
        Card.deleteOne({})
            .then((card) => {
                console.log('CARD router DELETE ', card)
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(card)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({
                    error: 'Error: could no DELETE data from /card',
                })
                next(err)
            })
    })
// .delete((req, res, next) => {
//         Card.findByIdAndRemove(req.params._Id)
//         .then((resp) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(resp);
//         }, (err) => next(err))
//         .catch((err) => next(err));

export default cardRouter
