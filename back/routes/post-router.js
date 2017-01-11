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
		res.send('Posts: ', posts);
	})
	// SORT THEM IN REVERSE
	.then((posts) => {
		posts.sort(function(a,b) {
			return (b - a);
		})
	})
	.catch( (err) => {
		console.log("ERROR GETTING USERS POSTS:", err)
		res.sendStatus(500)
	})
}

// GENERATE TIMELINE
// SO WE WANT THE MOST RECENT POST BY EVERY USER (DESCENDING DATE AND TIME)
const getTimeline = (req, res) => {
		
		// Post.get('/api/feed/:userId')
		// .then(data => {
		// 	console.log('Data:', data)
		// 	response.send(data)
		// })
		// // SORT THEM IN REVERSE
		// .then((posts) => {
		// 	posts.sort(function(a,b) {
		// 		return (b - a);
		// 	})
		// })

		Post.findAll({ limit: 20, order: '"updatedAt" DESC' })
		.catch( (err) => {
			console.log("ERROR GETTING TIMELINE:", err)
			res.sendStatus(500)
		})
}

// UPDATE A SPECIFIC POST
const updatePost = (req, res) => {
	Post.update(

		{
			title: req.body.title,
			post_body:req.body.post_body
		},

		{ 
			where: {
			 id: req.params.id
		}

	    })
		   .then(function(){
		   	res.send(200)
		})
		   
		   .catch((error)=>{
			res.sendStatus(500);
		})

};

// SEE WHO YOU'RE FOLLOWING
const seeFollowing = () => {
		User.findById(req.params.userId)
		.then((user) => {
			return user.seeFollowing()
		})
		.catch( (err) => {
			console.log("ERROR GETTING FOLLOWERS:", err)
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
