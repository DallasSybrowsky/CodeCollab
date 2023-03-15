import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AccountBox from "./components/accountBox";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Chat from "./components/accountBox/Chat";

import styled from "styled-components";

import { io } from "socket.io-client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";
export const socket = io(URL, {
  autoConnect: false,
});

function App() {
  return (
   
   
    <ApolloProvider client={client}>
  
      <button onClick={() => socket.connect()}>Connect</button>
      <Router>
      <Routes>
        <Route 
          exact
          path="/" 
          element={
            <>
              <Nav />
              <AppContainer>
                <AccountBox />
              </AppContainer>
              <Footer />
            </>
          }
        />
        <Route 
          path="/chat" 
          element={
            <>
              <Nav />
              <Chat />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
   
    </ApolloProvider>
   
    
  );
}

export default App;
