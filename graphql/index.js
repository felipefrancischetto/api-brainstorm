const { GraphQLSchema } = require('graphql');
const { query } = require('./queries/index');
const { mutation } = require('./mutations/index');

const schema = new GraphQLSchema({
    query,
    mutation,
});

module.exports = schema;