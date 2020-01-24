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

// STUFF THAT'S NEEDED
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static(path.join(__dirname, 'client/build')));

// ERROR HANDLING

app.use((err, req, res, next) => {
  console.log(err);
});

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
    useCreateIndex: true
  })
  .catch((error) => handleError(error));

// SCHEMA
const MsgSchema = new mongoose.Schema({
  msg: String
});

// MODEL
var Msg = mongoose.model('Msg', MsgSchema);

// ROUTES AND REQUEST HANDLERS

// GET REQUEST

app.get('/', urlencodedParser, (req, res, next) => {
  next(createError('oof'));
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.get('*', urlencodedParser, (req, res, next) => {
  next(createError('oof'));
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// POST REQUEST
app.post('/', urlencodedParser, (req, res, next) => {
  var newMsg = Msg(req.body).save((err, data) => {
    console.log(`💌  Posting: ${req.body.msg}`);
    console.log(err);
    err
      ? () => {
          throw err;
        }
      : console.log(`🎉  Success`);
    //TODO improve error handling (and like add some logs maybe 🧠)
    res.json(data);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});
