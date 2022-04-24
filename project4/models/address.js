const mongoose =  require('mongoose');

const Schema  = mongoose.Schema;

const address = Schema({
    Name: {type:String, required: true },
    email: {type:String, required: true, unique: true},
    address:{type:String, required: true},
    
});



module.exports = mongoose.model('address', address);