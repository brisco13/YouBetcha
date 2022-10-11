import * as React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


import Home from './pages/Home';
import Profile2 from './pages/Profile2';
import MakeABetForm from './pages/MakeABetForm'
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import BottomNav from './components/Navbar/BottomNav';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
   <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
            <div>
              <Routes>
                <Route 
                  path="/"
                  element={<Home />}
                />
                <Route 
                  path="/login" 
                  element={<LoginForm />}
                />
                <Route 
                  path="/signup" 
                  element={<SignUpForm />}
                />
                <Route  
                  path="/profile" 
                  element={<Profile2 />}
                />
                <Route 
                  path="/me" 
                  element={<Profile2 />}
                />
                <Route  
                  path="/profiles/:username" 
                  element={<Profile2 />}
                />
                <Route 
                  path="/bet" 
                  element={<MakeABetForm />}
                />
              </Routes>
            </div>
          {/* <Navbar /> */}
          <BottomNav/>
        </div>
      </Router>
    </ ApolloProvider>
  );
}

export default App;
