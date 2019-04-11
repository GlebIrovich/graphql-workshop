import React from "react";
import "./App.css";
import Movies from './Movies';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo"
import Species from "./Species";

const client = new ApolloClient({ uri: `https://swapi.apis.guru/` });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Movies/>
      <Species/>
    </ApolloProvider>
  );
};

export default App;
