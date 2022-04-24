const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ethics = Schema({
    imageurl:{type:String,},
    bookname:{type:String,},
    author:{type:String,},
    price:{type:String}
})

module.exports=mongoose.model('ethics',ethics);