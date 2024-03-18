const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: Sting,
      required: true,
      unique: true,
    },
    password: {
      type: Sting,
      required: true,
    },
    profilePic: {
      type: Sting,
      default: '',
    },
  },
  { timestamps: true }
);

module.export = mongoose.model('User', UserSchema);
