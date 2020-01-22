const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

var app = express();

//static files
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true });

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

var Msg = mongoose.model('Msg', MsgSchema);

console.log(`👋  Hey there! The app is running 🏃‍♀️`);

// POST REQUEST HANDLER
app.post('/', urlencodedParser, (req, res) => {
  var newMsg = Msg(req.body).save((err, data) => {
    console.log(`💌  Posting: ${req.body.msg}`);
    if (err) throw err;
    res.json(data);
  });
});
