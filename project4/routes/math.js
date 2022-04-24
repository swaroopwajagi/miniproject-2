const express = require('express');
const math = express();
const maths = require('../models/maths');
const bodyParser= require('body-parser');
math.use (bodyParser.json());
math.post('/maths',(req, res)=>{
    const math = new maths ({
        imageurl:req.body.imageurl,
        bookname:req.body.bookname,
        author:req.body.author,
        price:req.body.price
    });
    math.save();
    console.log(req.body);
    res.json({
        
        message:"maths data  added successfully",
    })
})
math.get('/dbdata',(req,res)=>{
    maths.find().then(documents=>{
        res.json({
            message:'data fetch successflly',
            data:documents,
        })
        
    })
      
    
})
module.exports = math