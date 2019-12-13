import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const query = gql`
  {
    solution
  }
`;

client.query({ query }).then(response => {
  console.log(response.data);
});

const App = () => {
  return <div>Hello world!</div>;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
