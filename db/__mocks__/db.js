const connect = () => {
  console.log('Mongoose Mock Connected');
};
const findUser = async (obj) => {
  return Promise.resolve({
    firstName: 'Rajeev',
    lastName: 'Ranjan',
    address: '123 Bangalore st',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '540068',
    email: 'rajeev@test.com',
    password: '123',
  });
};
const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: 'Rajeev',
    lastName: 'Ranjan',
    address: '123 Bangalore st',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '540068',
    email: 'rajeev@test.com',
    password: '123',
  });
};
const disconnect = () => {
  console.log('Mock Disconnected');
};

module.exports = { connect, disconnect, findUser, saveUser };
