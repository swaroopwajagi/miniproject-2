const express = require('express');
const ethics=express();
const ethicss= require('../models/ehtics');
const bodyParser = require('body-parser');
ethics.use(bodyParser.json());
ethics.post('/ethics', (req,res)=>{
    const ethics = new ethicss ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    ethics.save();
res.json({
    message:'data added successfully'
})

})
ethics.get('/dbdata5',(req,res)=>{
    ethicss.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})

module.exports =ethics;