const nodemailer = require("nodemailer");
const express = require("express");
const mail = express();
const bodyParser=require('body-parser');
mail.use(bodyParser.json());

mail.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  });
  
  async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "wajagiswaroop@gmail.com",
        pass:"swaroop@0207"
      }
    });
  
    let mailOptions = {
      from: 'wajagisr@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Welcome to Online book shop", // Subject line
      html: `<h1>Hi ${user.name}</h1><br>
      <h4>you ordered ${user.booksname} book for Rs.${user.prices},<br> it will get deliverd at ${user.address}</h4>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }
  module.exports=mail;
  // main().catch(console.error);