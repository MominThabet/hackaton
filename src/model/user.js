const mongoose = require('mongoose');
const User = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('user', User);
