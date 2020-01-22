const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to the database
mongoose
  .connect(
    'mongodb+srv://tynDB:coolcool222%21@cluster0-sbe8q.gcp.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  )
  .catch((error) => handleError(error));

// Create a schema (the blueprint of data)
const MsgSchema = new mongoose.Schema({
  msg: String
});

var Msg = mongoose.model('Msg', toDoSchema);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  console.log(`👋  Hey there! The app is running 🏃‍♀️`);

  // REQUEST HANDLERS
  app.post('/todo', urlencodedParser, (req, res) => {
    var newTodo = Todo(JSON.parse(JSON.stringify(req.body.msg))).save(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  });
};
