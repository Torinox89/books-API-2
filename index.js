// DEPENDENCIES
const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())


// Books: 
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)


app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

//ROUTE INDEX
app.get('/', (req, res) => {
    res.send('Hello world!')
    })



app.get('*', (req, res) => {
    res.send('404 page')
  })

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
    console.log('CORS-enabled web server listening on 3001')
})
