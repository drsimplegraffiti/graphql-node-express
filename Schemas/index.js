const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
//import data
const userData = require("../MOCK_DATA.json");

// Import userType
const UserType = require("./TypeDefs/UserType");

// create a query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { Id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

// Creating Update , delete, fetch etc --> data mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        //perform db login here
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

//Create a graphql schema
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
