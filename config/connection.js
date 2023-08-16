const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://jaroxo2694:MnD5z6QWNoW9f4m4@cluster0.9swurtf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
