const { connect, disconnect, findUser, saveUser } = require('./db');
const User = require('../models/userModel');
const mongoose = require('mongoose');

//describe(), test(), expect()
beforeAll(async () => {
  return await connect();
});

describe('Unit Test Suite', () => {
  test('As a user I want to save user to the database', async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: 'Rajeev',
      lastName: 'Ranjan',
      address: '123 Bangalore st',
      city: 'Bangalore',
      state: 'Karnataka',
      zip: '540068',
      email: 'rajeev@test.com',
      password: '123',
    });
    const user = await saveUser(newUser);
    expect(user.firstName).toEqual('Rajeev');
    expect(user.lastName).toEqual('Ranjan');
    expect(user.address).toEqual('123 Bangalore st');
    expect(user.city).toEqual('Bangalore');
    expect(user.state).toEqual('Karnataka');
    expect(user.zip).toEqual('540068');
    expect(user.email).toEqual('rajeev@test.com');
    expect(user.password).toEqual('123');
  });
});

afterAll(async () => {
  return await disconnect();
});
