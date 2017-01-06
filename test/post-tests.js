var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var Post = require('../models/index').Post;

describe('Post tests', () => {
// Seeds our DB to enable us to run tests  
  var posts = [
    {title: 'post1', content: 'post1 content', UserId: '1'},
    {title: 'post2', content: 'post2 content', UserId: '2'},
    {title: 'post3', content: 'post3 content', UserId: '3'}
  ];
  before(() => {
    return Post.sync({force: true})
    .then(() => Post.bulkCreate(posts))
    .then(() => done())
    .catch((err) => console.log("DB Error", err))
  });
// // GET all posts by ONE user test
//   it(`'/api/post/:userId' should respond with all posts by one user`, (done) => {
//     supertest(server)
//       .get('/api/post/2')
//       .end((err, res) => {
//         console.log('RES BODY:', res.body);
//         expect(res.body).be.a('object');
//         done();
//       })
//   });

// ********** GET all posts by all users **********
  it(`'/' should respond with all posts`, (done) => {
    supertest(server)
    .get('/api/post')
    .end((err, res) => {
      // console.log('RESPONSE BODY LENGTH:', res.body.length);
      // console.log('RESPONSE BODY:', res.body);
      expect(res.body).be.a('array');
      expect(res.body.length).equal(3);
      done();
    })
  })
  
})
