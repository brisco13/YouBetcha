import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import Navbar from './components/Navbar';
import SignUpForm from './pages/SignUpForm';

const httpLink = createHttpLink({
  uri: 'graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : " ",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
   <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Feed />}>
                <div className="App">
                  <h1 className="title">YouBetcha!</h1>
                </div> 
            </Route>
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/signup"
              element={<SignUpForm />}
            />
            <Route
              path="/login"
              element={<LoginForm />}
            />
          </Routes>
        </div>
      </Router>
    </ ApolloProvider>
  );
}

export default App;
