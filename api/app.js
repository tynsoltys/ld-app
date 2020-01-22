const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();
//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// listen to a port
app.listen('9000');
console.log(`🎸  You're listening to port 9000`);

//Connect to the database
mongoose
  .connect(
    `mongodb+srv://` +
      process.env.DB_USER +
      `:` +
      process.env.DB_PASS +
      `@` +
      process.env.DB_HOST +
      `/test?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  )
  .catch((error) => handleError(error));

// Create a schema (the blueprint of data)
const MsgSchema = new mongoose.Schema({
  msg: String
});

var Msg = mongoose.model('Msg', MsgSchema);

console.log(`👋  Hey there! The app is running 🏃‍♀️`);

// REQUEST HANDLERS
app.post('/', urlencodedParser, (req, res) => {
  var newMsg = Msg(req.body).save((err, data) => {
    console.log(req.body);
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
