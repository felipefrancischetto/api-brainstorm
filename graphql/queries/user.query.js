const {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
} = require('graphql');
const { userSchema } = require('../types/user');
const { User } = require('../../db').models;

const userQuery = {
    type: userSchema,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: async (obj, args) => {
        const user = await User
            .findOne({ where: { id: args.id} });
        return user
    },
};

const usersQuery = {
    type: GraphQLList(userSchema),
    args: {
        id: {
            type: GraphQLInt,
        },
    },
    resolve: async () => {
        const users = await User
            .findAll({ where: {} });
        return users;
    },
}

module.exports = {
    userQuery,
    usersQuery,
};