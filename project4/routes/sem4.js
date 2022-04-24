const express = require('express');
const sem4 = express();
const dmgt= require('../models/dmgt');
const bodyParser = require('body-parser');
sem4.use(bodyParser.json());
sem4.post('/sub1',(req,res)=>{
    const dmgts = new dmgt ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    dmgts.save();
    res.json({
        message:'data added successfully'
    })
})
sem4.get('/dbdata6',(req,res)=>{
    dmgt.find().then(document =>{
        res.json({
            message:'data fetch successfully',
            data:document
        })
    });
})
module.exports=sem4;