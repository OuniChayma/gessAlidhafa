// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  phone: {
    type: String
  },
  birthDate: {
    type: String
  },
  city: {
    type: String
  },
  job: {
    type: String
  },
  adress: {
    type: String
  },
  postalCode: {
    type: String
  },
  motdepass: {
    type: String
  },
  maritalStatus: {
    type: String
  },
  gender: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
