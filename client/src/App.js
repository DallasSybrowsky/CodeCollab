import React, { useState } from "react";
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
import Chat from "./components/accountBox/Chat";
import styled from "styled-components";
import { io } from "socket.io-client";
import SetAvatar from "./components/accountBox/SetAvatar";
import CardExample from "./components/accountBox/Card";
import Explore from "./components/accountBox/Explore";
import ExploreCard from "./components/accountBox/ExploreCard";
import About from "./components/accountBox/About";
import ProfileCard from "./components/accountBox/ProfileCard";
import ProjectForm from "./components/accountBox/ProjectForm";
import SingleProject from "./components/accountBox/SingleProject";
import CommentForm from "./components/accountBox/CommentForm"
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
  // const [input, setInput] = useState("");
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  // function chatSend(event) {
  //   event.preventDefault();
  //   console.log("submitted:", input);
  //   if (input) {
  //     socket.emit("chat message", input);
  //     setInput("");
  //   }
  // }
  // //  this is for the profile cards
  // const [cards, setCards] = useState([
  //   {
  //     title: "What I learned from my visit to The Upside Down",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  //     author: "Nancy Wheeler",
  //   },
  // ]);
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AppContainer>
                  <AccountBox />
                </AppContainer>
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <ExploreCard
                  key={ExploreCard.id}
                  projectTitle={ExploreCard.projectTitle}
                  projectAuthor={ExploreCard.projectAuthor}
                />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <ProfileCard
                  key={ProfileCard.id}
                  projectTitle={ProfileCard.projectTitle}
                  projectDescription={ProfileCard.projectDescription}
                />
              </>
            }
          />
          <Route
            path="/projectform"
            element={
              <>
                <ProjectForm
                  key={ProjectForm.id}
                  projectTitle={ProjectForm.projectTitle}
                  projectDescription={ProjectForm.projectDescription}
                />
              </>
            }
          />
          <Route
            path="projects/:projectId"
            element={
              <>
                <SingleProject
                  key={SingleProject.id}
                  projectTitle={SingleProject.projectTitle}
                  projectDescription={SingleProject.projectDescription}
                />
                <CommentForm/>
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}
export default App;
