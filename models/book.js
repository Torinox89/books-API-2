// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

// schema
const bookSchema = new Schema({
    title: { type: String,  required: true},
    description: String,
    quantity: Number,
    imageURL: ""
  })
  

// model and export 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book