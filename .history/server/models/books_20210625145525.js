//Name : Anureet Kaur
//Student ID : 301174444
// Web App : Favorite Book List
// MIDTERM for Web Application Development

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
