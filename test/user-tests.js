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

// tests GET all users
  it(`'/' should respond with all users`, (done) => {
    supertest(server)
    .get('/api/user')
    .end((err, res) => {
      // console.log('RESPONSE BODY LENGTH:', res.body.length);
      // console.log('RESPONSE BODY:', res.body);
      expect(res.body).be.a('array');
      expect(res.body.length).equal(3);
      done();
    })
  });

// tests GET one user by name
  it(`'/:username' should return one user`, (done) => {
    supertest(server)
    .get('/api/user/user1')
    .end((err, res) => {
      console.log(res.body);
      expect(res.body).be.a('array');
      expect(res.body.length).equal(1);
      expect(res.body[0].id).equal(1);
      done();
    })
  })

// tests POST a new user
  it(`'/' should respond with a new user`, (done) => {
    supertest(server)
    .post('/api/user')
    .type('form')
    .send({username: 'user4', password: 'pass4', firstName: 'first4', lastName: 'last4', email: 'email4@email.com'})
    .end((err, res) => {
      console.log(res.body);
      expect(res.body).exist;
      expect(res.body).be.a('object');
      done();
    })
  });
})