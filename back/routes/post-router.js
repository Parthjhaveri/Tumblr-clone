const express = require('express');
const router = express.Router();
const Post = require('../../models').Post;


/////////////////////
////FUNCTION/////////
/////////////////////

//MAKE NEW POST
const makePost = ((request,response) => {
  //console.log(request.body);
  Post.create({
    title:request.body.title,
    content:request.body.content
  })
    .then(data => {
      response.send(data)
    })
    .catch(error => {
      response.send(error)
    })
})

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
const updatePost = () => {
		Post.findById({
			id: req.params.id			
		})
		.then((post) => {
			console.log('Post: ', post)
		})
}

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
	.post(makePost)

/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;
