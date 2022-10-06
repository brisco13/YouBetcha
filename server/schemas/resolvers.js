const { ServerDescription } = require("mongodb");
const { comment, user, reaction, thought } = require("../models");
const { seed, seedData } = require("../seeds");
const { typeDefs } = require("./typeDefs");

const resolvers = {
  Query: {
    users: async () => {
      return;
    },
    commment: async (parent, { _id }) => {
      return;
    },
    reaction: async (parent, { _id }) => {
      return;
    },
    thought: async (parent, { _id }) => {
      return;
    },
  },
  Mutation: {
    mutation1: async (parent, args) => {
      const var1 = await file1
        .create
        //stuff goes here
        ();
      return var1;
    },
    mutation2: async (parent, { _id }) => {
      const var2 = await file2
        .findOne
        //stuff goes here
        ();
      return var2;
    },
  },
};

module.exports = resolvers;
