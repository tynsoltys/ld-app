var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

require('dotenv').config();

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB connection - working
mongoose
  .connect(
    'mongodb+srv://tynDB:coolcool222%21@cluster0-sbe8q.gcp.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  )
  .catch((error) => handleError(error));

// DB Schema - check
const msgSchema = new mongoose.Schema({
  Msg: String
});

// New Model - check
let Msg = mongoose.model('Msg', msgSchema);

// HANDLERS
console.log(`👋  Hey there! The app is running 🏃‍♀️`);

// HANDLERS
app.post('/', urlencodedParser, (req, res) => {
  // msgs.push(req.body);
  console.log('💌  Posting Message: ' + req.body.msg);
  console.log(req.body);
  // res.send([req.body.msg, msgs]);
  console.log(JSON.parse(JSON.stringify(req.body)));
  var newMsg = Msg(JSON.parse(JSON.stringify(req.body))).save((err, data) => {
    if (err) throw err;
    res.json(data);
  });
  console.log(newMsg);
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
