const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const routes = require('./routes');
const userRouteFile = routes.userRouteFile;
const postRouteFile = routes.postRouteFile;

//postman 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

//images 
app.use(express.static('./front/public'))

app.use('/api/user', userRouteFile)
app.use('/api/post', postRouteFile)

const db = require('../models')

//images 
app.use(express.static('./front/public'))



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../front/index.html'))
})




//connect data base to a server 
db.sequelize.sync().then( () => {
	console.log('Server running at http://localhost:8080')
	app.listen(8080)
})

module.exports = app;