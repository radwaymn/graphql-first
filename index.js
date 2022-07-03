const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const schema = fs.readFileSync(path.join(__dirname, "/schema.graphql"), "utf8");
const typeDefs = gql(schema);


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
