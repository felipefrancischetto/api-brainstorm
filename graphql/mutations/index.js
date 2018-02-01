const { GraphQLObjectType } = require('graphql');
const { userMutation } = require('./user.mutation');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'this mutation to create user',
    fields: {
        createUser: userMutation,
    },
});

module.exports = mutation;
