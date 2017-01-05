const express = require('express');
const router = express.Router()
const Post = require('../../models').Post




/////////////////////
////FUNCTION/////////
/////////////////////
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

/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
	.get(getPost)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;