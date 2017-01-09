const express = require('express');
const router = express.Router()
const User = require('../../models').User
const Following = require('../../models')["Following_Trackers"]



console.log(Following)
/////////////////////
////FUNCTION/////////
const getAllUsers = ((request,response) => {
	User.findAll()
		.then(data => {
			response.send(data)
		})
		.catch(error => {
			response.send(error)
		})
})

const makeNewUser = ((request,response) => {
  //console.log(request.body);
  User.create({
    username:request.body.username,
    password:request.body.password,
    firstName:request.body.firstName,
    lastName:request.body.lastName,
    email:request.body.email
  })
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.send(error)
    })
})

//find user by username
const getUser = ((request,response) => {
  User.findAll({
      where: {username: request.params.username}
    })
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.send(error)
    })
})

//follow someone by username
const followSomeone = ((request,response) => {
  User.findAll({
      where: {username: request.params.username}
    })
    .then(data => {
      data[0].addFollowing(request.params.userId);
      response.send(data);
    })
    .catch(error => {
      response.send(error)
    })
})

//see who you're following
const getUsersYouFollow = ((request,response) => {
  //res.send('Hello')
  // User.findAll()
  // .then(user => {
  //   return user.getUser()
  // })
  // .then(users =>{
  //   response.send("Happy")
  // })
  
  Following.findAll({})
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.send(error)
    })
})

//search for blogs or people to follow


/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
	.get(getAllUsers)
  .post(makeNewUser)

router.route('/:username')
  .get(getUser)

router.route('/follow/:username/:userId')
  .get(followSomeone)

router.route('/following/:userId')
  .get(getUsersYouFollow)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;