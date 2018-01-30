import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './models/schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://localhost:/test');

const Person = mongoose.model('Person', { name: String });

const PORT = 3000;

const app = express();

app.use('./graphql', bodyParser.json(), graphqlExpress({ schema, context: { Person } }));

app.use('/graphql', graphiqlExpress({ endpoint: 'graphql' }));

app.listen(PORT);
