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
// const getTimeline = (req, res) => {
// 	Post.get('/api/feed/:userId')
// 		.then(data => {
// 			console.log('Data:', data)
// 			response.send(data)
// 		})

// }

// songRouter.get('/',(req,res)=>{
//     Song.findAll({include:[Artist,Genre]}).then((song)=> {res.send(song)});
// })



/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
	.get(getPost)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;