const express = require('express');
const router = express.Router();
const Post = require('../../models').Post;
const Tags = require('../../models').Tag;
const User = require('../../models').User;



/////////////////////
////FUNCTION/////////
/////////////////////

//MAKE NEW POST
const makePost = ((request,response) => {
	Post.create({
    title:request.body.title,
    content:request.body.content
  })	//adding author
  	.then(newPost => {
	  		User.findAll({
		      where: {username: request.body.username}
		    })
			    .then(userInfo => {
			      userInfo[0].setPosts(newPost.id)
			    })
			return newPost
  	})	//adding tags
    .then(newPost => {
		    //creating and finding tag-ids
			var tags = request.body.tags.split(',');

			tags.forEach((val,indx) => {
				Tags.findOrCreate({
					where:{title:val}
				})
					.then(data => {
							//tag associations
						newPost.addTags(data[0].id);
					})
			})
			return newPost
    })
    .then(newPost => {
    	response.send(newPost)
    })
    .catch(error => {
    	console.log(error)
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
	.post(makePost)

	// router.route('/tag')
	// .post(makeTag)

/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;