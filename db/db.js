require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('Mongodb is up and working');
};
const disconnect = async () => {
  await mongoose.connection.close();
};
const findUser = async (obj) => {
  await User.findOne(obj);
};
const saveUser = async (newUser) => {
  return newUser.save();
};

module.exports = { connect, disconnect, findUser, saveUser };
