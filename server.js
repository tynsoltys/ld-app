const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var logger = require('morgan');

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

// ROUTES AND REQUEST HANDLERS

// GET REQUEST

// POST REQUEST
app.post('/', urlencodedParser, (req, res, next) => {
  console.log(`💌  Posting: ${req.body.msg}`);
  const reason = `You cannot send an empty message!`;
  req.body.msg.length === 0 ? next() : res.json(req.body);
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
