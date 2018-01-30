export default {
  Query: {
    allPerson: async (parent, args, { Person }) => {
      const people = await Person.find();
      return people.map((person) => {
        person._id = _id.toString();
        return person;
      });
    },
  },
  Mutation: {
    createPerson: async (parent, args, { Person }) => {
      const person = await new Person(args).save();
      person._id = person._id.toString();
      return person;
    },
  },
};
