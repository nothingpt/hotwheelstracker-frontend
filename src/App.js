import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

import "./App.css";
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ModelList from "./components/ModelList";

class App extends Component {
  render() {
    const link = new HttpLink({
      uri: "http://localhost:7777/",
      credentials: "include"
    });

    const client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="container">
            <Header />
            <ModelList />
            <Footer />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
