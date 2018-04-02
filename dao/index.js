const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', { 
  name: String,
  sname: String,
  email: String,
  phone: String
});

module.exports = {
  models: {
    User
  }
}; 