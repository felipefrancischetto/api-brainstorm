const { GraphQLString, GraphQLInt } = require('graphql');
const { userSchema } = require('../types/user');
const db = require('../../db');

const { User } = db.models;

const userMutation = {
  type: userSchema,
  args: {
    id: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    acessType: {
      type: GraphQLString,
    },
  },
  resolve: async (obj, args) => {
    const user = await User
      .create({
        username: args.username,
        password: args.password,
        acessType: args.acessType,
      });
    return user;
  },
};

module.exports = userSchema;