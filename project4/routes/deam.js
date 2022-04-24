const express = require('express');
const deam=express();
const deams= require('../models/deam');
const bodyParser = require('body-parser');
deam.use(bodyParser.json());
deam.post('/deam', (req,res)=>{
    const deam = new deams ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    deam.save();
res.json({
    message:'data added successfully'
})

})
deam.get('/dbdata4',(req,res)=>{
    deams.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})

module.exports =deam;