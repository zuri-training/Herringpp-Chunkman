const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true,
    min: 6,
    max: 50
  },
  email: { 
    type: String, 
    unique: true,
    min: 6,
    max: 50 
  },
  password: { 
    type: String, 
    required: true,
    min: 6,
    max: 1120
  },
  token: { 
    type: String 
  },
});

module.exports = mongoose.model('user', userSchema);