const {
    GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull,
} = require('graphql');

const userSchema = new GraphQLObjectType({
    name: 'User',
    description: 'Schema User',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLInt),
        },
        username: {
            type: GraphQLNonNull(GraphQLInt),
        },
        password: {
            type: GraphQLNonNull(GraphQLString),
        },
        acessType: {
            type: GraphQLNonNull(GraphQLString),
        },
    },
});

module.export = userSchema;