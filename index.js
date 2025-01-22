require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");



mongoose.connect(`mongodb+srv://${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}@cluster0.kj5c3.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));


app.use(cors())
app.use(express.json())


app.post('/sendEmail', async function (req, res) {
    res.send('Hello World')
    console.log(req.body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Load from .env
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: req.body.message, // Subject line
      html: ` <b>Name:</b>${req.body.name}
               <b>Email:</b>${req.body.email}
               <b>phone:</b>${req.body.phone}
               <b>Title:</b>${req.body.title}
               <b>Message:</b>${req.body.message}
      `, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    
  })
  
  app.listen(3000)


  // mdshahadat

  // mdshahadat101108    