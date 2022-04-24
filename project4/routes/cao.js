const express = require('express');
const cao=express();
const caos= require('../models/cao');
const bodyParser = require('body-parser');
cao.use(bodyParser.json());
cao.post('/cao', (req,res)=>{
    const cao = new caos ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    cao.save();
res.json({
    message:'data added successfully'
})

})
cao.get('/dbdata2',(req,res)=>{
    caos.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})

module.exports = cao;