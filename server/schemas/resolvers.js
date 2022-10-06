const { file1, file2 } = require('../models');

const resolvers = {
  Query: {
    query1: async () => {
      return 
    },
    query2: async (parent, { _id }) => {
      return 
    },
  },
  Mutation: {
    mutation1: async (parent, args) => {
      const var1 = await file1.create(
        //stuff goes here
      );
      return var1;
    },
    mutation2: async (parent, { _id }) => {
      const var2 = await file2.findOne(
        //stuff goes here
      );
      return var2;
    },
  },
};

module.exports = resolvers;