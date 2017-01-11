const express = require('express');
const router = express.Router();
const Post = require('../../models').Post;
const User = require('../../models').User;




/////////////////////
////FUNCTION/////////
/////////////////////

// GET ONE POST
const getPost = ((request,response) => {
	Post.findAll()
		.then(data => {
      console.log('DATA:', data)
			response.send(data)
		})
		.catch(error => {
			response.send(error)
		})
})

// GET ALL POSTS BY ONE USER
const getUserPosts = (req, res) => {
	User.findById(req.params.userId)
	.then((user) => {
		return user.getPosts()
	})
	.then((posts) => {
		res.send(posts);
	})
	.catch( (err) => {
		console.log("ERROR GETTING USERS POSTS:", err)
		res.sendStatus(500)
	})
}

// Add Note
const addNote = (req, res) => {
	Post.findById(req.params.postId)
	.then(post => {
		post.addUser([req.params.userId])
	})
	.then(()=> {
		res.send('New note has been added.')
	})
}

const removeNote = (req, res) => {
	Post.findById(req.params.postId)
	.then(post => {
		post.removeUser(req.params.userId)
	})
	.then(() => {
		res.send('Note has been removed.')
	})
}

function getNotesForOnePost(req, res) {
	Post.findById(req.params.postId)
	.then(function(post) {
		return post.getUsers()
	})
	.then(function(users) {
		console.log(users);
		res.send(users);
	})
}
/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
	.get(getPost)

router.route('/:postId/:userId')
	.post(addNote)
	.delete(removeNote)

router.route('/:postId')
	.get(getNotesForOnePost)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;