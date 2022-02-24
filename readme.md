## graphql

> has only one route /graphql

```javascript
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5676;

app.listen(PORT, () => {
  console.log("Sever running" + PORT);
});
```

## install packages

> npm install graphql express-graphql

## Import the installed packages

```javascript
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const PORT = process.env.PORT || 5676;

app.listen(PORT, () => {
  console.log("Sever running on : " + PORT);
});
```

---

## Create a graphql server

```javascript
const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5676;

const app = express();
const graphql = require("graphql");

const { graphqlHTTP } = require("express-graphql");

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
```

---

## To run

> http://localhost:5676/graphql

---

## Get information using query on the GUI --> To know if query works

```javascript

query {
    getAllUsers {
        firstName,
        lastName,
        email
    }
}
```

---

## Run a mutation

```javascript
mutation {
    createUser(firstName: "Abayomi", lastName : "Ogunnusi", email: "yo@yopmail.com"){
        firstName
        lastName,
        email
    }
}
```

---

## Check to see if user was created

```javascript
query {
    getAllUsers {
        id
        firstName
        email
        password
    }
}
```
