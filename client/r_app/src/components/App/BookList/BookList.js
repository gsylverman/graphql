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
  render() {
    console.log(this.props);
    return (
      <ul>
        <li>Book1</li>
      </ul>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
