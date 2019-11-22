const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  }
});

const User = mongoose.model(UserSchema);

module.exports = { User };
