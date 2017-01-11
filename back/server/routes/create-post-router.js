var express = require('express');
var postRouter  = express.Router();

const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');



// CREATE A NEW POST
postRouter.post('/create-post',(req,res) => {
    Song.create(
    	{
    	
    		where:{
    				title: req.body.title,
    				// body: req.
    			  },
    	
    	    include:[Artist,Genre]

    	}
    )
    .then(newPost => {res.send(newPost)});
})
