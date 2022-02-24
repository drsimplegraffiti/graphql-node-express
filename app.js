const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5676;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
// create a graphql server
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // can be changed to false if you dont want the GUI
  })
);

app.listen(PORT, () => {
  console.log("Sever running on : " + PORT);
});
