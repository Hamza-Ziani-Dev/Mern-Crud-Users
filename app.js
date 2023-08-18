var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const Port = 5000;

// app.get('/api',(req,res)=>{
//       res.send("Hello")
// })


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://root:123@cluster0.pjy8nb1.mongodb.net/")
        .then(()=>{console.log('DB Connect With Success')})
        .catch((err)=>{console.log(err.message);
})
        
app.listen(Port, (req,res)=>{
      console.log("Server Start!");
});

module.exports = app;
