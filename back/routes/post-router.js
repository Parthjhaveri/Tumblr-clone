const express = require('express');
const router = express.Router();
const Post = require('../../models').Post;




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





/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
	.get(getPost)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;