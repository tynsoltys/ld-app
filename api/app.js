var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HANDLERS
app.get('/', function(req, res, next) {
  //TODO: Get any existing messages from DB and send to index
  res.send('getting');
});

let msgs = [];

app.post('/', urlencodedParser, (req, res) => {
  msgs.push(req.body);
  console.log('💌  Posting Message: ' + req.body.msg);
  console.log(req.body);
  res.send([req.body.msg, msgs]);
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
  res.send(res.locals.message);
});

module.exports = app;
