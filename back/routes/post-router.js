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

function getNotesForOnePost(req, res) {
	Post.findById(req.params.postId)
	.then(function(post) {
		return post.getUsers()
	})
	.then(function(users) {
		// console.log(users);
		res.send(users);
	})
}

function getNoteForOnePostByOneUser(req, res) {
	Post.findById(req.params.postId)
	.then(function(post) {
		return post.getUsers({
			where: {
				id: req.params.userId
			}
		})
	})
	.then(function(users) {
		// console.log(users);
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
	.get(getNoteForOnePostByOneUser)

router.route('/:postId')
	.get(getNotesForOnePost)
	.post(makePost)

	// router.route('/tag')
	// .post(makeTag)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;
