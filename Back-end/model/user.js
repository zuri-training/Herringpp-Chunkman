const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true 
  },
  last_name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  token: { 
    type: String 
  },
});

module.exports = mongoose.model('user', userSchema);