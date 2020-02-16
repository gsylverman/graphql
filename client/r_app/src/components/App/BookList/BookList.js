import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.data.books);
      return this.props.data.books.map(item => {
        return <li key={item.id}>{item.name}</li>;
      });
    }
  }

  render() {
    return <ul>{this.displayBooks()}</ul>;
  }
}

export default graphql(getBooksQuery)(BookList);
