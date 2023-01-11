const mongoose = require('mongoose');

const bookShema = new mongoose.Schema({
    name:String,
    genre:String,
    authorId:String
})

module.exports = mongoose.model('Books',bookShema);