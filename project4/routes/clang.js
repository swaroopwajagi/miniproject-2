const express = require('express');
const clang = express();
const bodyParser = require('body-parser');
const clangs = require('../models/clang');
clang.use(bodyParser.json());
clang.post('/clang',(req,res)=>{
    const clang = new clangs ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    clang.save();
res.json({
    message:'data added successfully'
})

})

clang.get('/dbdata3', (req,res)=>{
    clangs.find().then(document =>{
        res.json({
            message:"msg fetch successfully",
            data:document
        })
    });
})

module.exports = clang;