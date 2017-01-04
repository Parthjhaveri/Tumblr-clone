const app = require('./back/server');
const sequelizeConnection = require('./back/db');
const environmentVariables = require('./back/env');

sequelizeConnection
.authenticate()
.then(() => {
  //this if statement will prevent our express server and test server (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
     app.listen(environmentVariables.PORT, () => console.log('Listening on port ' + environmentVariables.PORT));
  };
})
.catch((err) => console.log('Unable to connect to the database:', err));
