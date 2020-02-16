import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import BookList from "./BookList/BookList";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          APp
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
