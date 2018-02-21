require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/Todo`, { useMongoClient: true })
const port = process.env.PORT || 9999
const Todo = require('./app/models/todo')

app.listen(port)
console.log('Server is running on port: ' + port)

module.exports = app