const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//alow cross origin requests
app.use(cors());

// connect to mlab database
mongoose.connect(
  "mongodb://user1:NPiQXorDPAuprcgx@cluster0-shard-00-00-hpnb0.mongodb.net:27017,cluster0-shard-00-01-hpnb0.mongodb.net:27017,cluster0-shard-00-02-hpnb0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});
