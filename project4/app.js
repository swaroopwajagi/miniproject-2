const express = require("express");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth-route')
const bodyParser = require("body-parser");
const cors = require('cors');
const mail = require('./routes/email');
const math = require("./routes/math");
const cao = require('./routes/cao');
const clang = require('./routes/clang');
const deam = require('./routes/deam');
const sem4 = require("./routes/sem4");
const ethics = require("./routes/ethics");
const app = express();
const port = process.env.port || 8080;
app.use(cors());
app.use('/auth', authRoute);
app.use('/mails',mail);
app.use(bodyParser.json());
app.use('/sub1',math);
app.use('/sub2',cao);
app.use('/sub3', clang);
app.use('/sub4',deam);
app.use('/sub5',ethics);
app.use('/sem4',sem4);
mongoose.connect("mongodb+srv://login:Xh5fjFtYyIwCNOLU@cluster0.oxbzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("db is connected")
}).catch(()=>{
    console.log("connection failed");
})
app.listen(port, ()=>{
    console.log("server got connected",port);
})
