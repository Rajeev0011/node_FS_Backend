require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  console.log('Mongodb is up and working');
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};
const findUser = async (obj) => {
  return User.findOne(obj).exec();
};
const saveUser = async (newUser) => {
  return newUser.save();
};
const disconnect = async () => {
  await mongoose.connection.close();
};

module.exports = { connect, disconnect, findUser, saveUser };
