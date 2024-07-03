// import mongoose module
const mongoose = require("mongoose");
//create userschema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  pwd: String,
  role: String,
});
//affect name to teamSchema
const user = mongoose.model("User", userSchema);
//make model exportable
module.exports = user;
