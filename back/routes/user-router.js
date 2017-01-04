const express = require('express');
const router = express.Router()
const User = require('../../models').User




/////////////////////
////FUNCTION/////////
const getUser = ((request,response) => {
	User.findAll()
		.then(data => {
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
	.get(getUser)


/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;