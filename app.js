const express = require('express');
const graphqlHTTP = require('express-graphql');
const jwt = require('express-jwt');

//importar o ./graphql/index
const { schema } = require('./');
const { 
  jwtSecret,
  jwtRequired,
  testUser,
} = require('./config/auth.config')();

const PORT = 3000;
const app = express();

app.use(jwt({
  secret: jwtSecret,
  credentialsRequired: jwtRequired,
}));

app.use((req, res, next) => {
  req.user = (req.user._doc !== undefined) ?
    req.user._doc : testUser;

  next();
});

app.user('./graphql', graphqlHTTP({ schema, pretty: true, graphiql: true }));

app.listen(PORT, () => console.log('This API is runnning ...'));

module.export = app;