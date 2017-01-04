# Access Code Generator
Welcome to the Access Code Generator! This is a scaffolding built using Node, Express, React, and Sequelize.

## Database Setup
You'll first need to setup a database for the project. Then, in the `back/env/development.js` file you'll need to change the 'DATABASE_URI' to your specific database setup.

## Start
First: `npm install`
To start: `npm start`

## Testing
You can add new tests in the `test` folder.

To test: `npm test`

Your tests are also automatically called as part of `npm start`

## Authentication
Authentication (aka login) is mostly setup, but still missing a couple key parts: a `login` and `auth` route in your API. You will need to create them in order for login to fully work.

You can see AJAX calls for these routes in the `Login.jsx` and `App.jsx` components
