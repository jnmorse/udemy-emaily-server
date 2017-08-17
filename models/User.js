const mongoose = require('mongoose');
// const Shema = mongoose.Shema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
