const { GraphQLObjectType } = require('graphql');
const { userQuery, usersQuery } = require('./user.query');

const query = new GraphQLObjectType({
    name: 'query',
    description: 'this query return users',
    fields: {
        user: userQuery,
        users: usersQuery,
    },
});
module.exports = query;