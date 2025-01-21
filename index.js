require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');



mongoose.connect(`mongodb+srv://${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}@cluster0.kj5c3.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));


app.use(cors())
app.use(express.json())
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(3000)


  // mdshahadat

  // mdshahadat101108