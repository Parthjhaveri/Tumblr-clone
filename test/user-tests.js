var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var User = require('../models/index').User;

describe('User tests', () => {
// Seeds our DB to enable us to run tests
  var users = [
    {username: 'user1', password: 'pass1', firstName: 'first1', lastName: 'last1', email: 'email1@email.com'},
    {username: 'user2', password: 'pass2', firstName: 'first2', lastName: 'last2', email: 'email2@email.com'},
    {username: 'user3', password: 'pass3', firstName: 'first3', lastName: 'last3', email: 'email3@email.com'}
  ];
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .then(() => done())
    .catch((err) => console.log('DB Error', err));
  });

  it(`'/' should respond with all users`, (done) => {
    supertest(server)
    .get('/api/user')
    .end((err, res) => {
      console.log('RESPONSE BODY LENGTH:', res.body.length);
      console.log('RESPONSE BODY:', res.body);
      expect(res.body).be.a('array');
      expect(res.body.length).equal(3);
      done();
    })
  })
})