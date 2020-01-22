const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// HELLO
console.log(`👋  Hey there! The app is running 🏃‍♀️`);

// RUN THIS
var app = express();

// STUFF THAT'S NEEDED
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static(path.join(__dirname, 'build')));

// LISTEN
app.listen('9000');
console.log(`🎸  You're listening to port 9000`);

// CONNECT DB
const dbString =
  `mongodb+srv://` +
  process.env.DB_USER +
  `:` +
  process.env.DB_PASS +
  `@` +
  process.env.DB_HOST +
  `?retryWrites=true&w=majority`;

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

app.get('/', urlencodedParser, (req, res) => {
  console.log('This is a get request bro');
  res.send('🍒 Sorry, this is just an API.');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// POST REQUEST
app.post('/', urlencodedParser, (req, res) => {
  var newMsg = Msg(req.body).save((err, data) => {
    console.log(`💌  Posting: ${req.body.msg}`);
    err
      ? () => {
          console.log(`🙅  Uhoh!`);
          throw err;
        }
      : console.log(`🎉  Success`);
    //TODO improve error handling (and like add some logs maybe 🧠)
    res.json(data);
  });
});
