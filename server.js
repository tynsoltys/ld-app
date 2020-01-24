const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
var logger = require('morgan');
var createError = require('http-errors');
require('dotenv').config();

// HELLO
console.log(`👋  Hey there! The app is running 🏃‍♀️`);

// RUN THIS
var app = express();

// MIDDLEWARES AND OTHER FUN THINGS
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static(path.join(__dirname, 'client/build')));

// LISTEN
const PORT = process.env.PORT || 9000; //Heroku sets port dynamically
app
  .listen(PORT, () => {
    console.log(`🎸  You're listening to ${PORT}!`);
  })
  .on('error', (err) => {
    console.log(`Listening Error Code: ${err.code}`);
  });

// CONNECT DB
const dbString = process.env.MONGODB_URI;

mongoose
  .connect(dbString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    connectTimeoutMS: 1000
  })
  .catch((err) => {
    console.log(`DB error: ${err}`);
  });

// SCHEMA
const MsgSchema = new mongoose.Schema({
  msg: String
});

// MODEL
var Msg = mongoose.model('Msg', MsgSchema);

// ROUTES AND REQUEST HANDLERS

// GET REQUEST

// POST REQUEST
app.post('/', urlencodedParser, (req, res, next) => {
  var newMsg = Msg(req.body).save((err, data) => {
    console.log(`💌  Posting: ${req.body.msg}`);
    err
      ? () => {
          next(err);
        }
      : console.log(`🎉  Success`);
    res.json(data);
  });
});

// ROUTES N THINGS

app.get('/', urlencodedParser, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.get('*', urlencodedParser, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// ERROR HANDLING

app.use((err, req, res, next) => {
  console.log(`There's some weird ${err.name} in the house.`);
  res.status(err.statusCode || 500).send(err.message);
});
