import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import PageHeader from './components/layouts/PageHeader';
import Footer from './components/layouts/Footer';
import Characters from './components/pages/Characters';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CharacterDetails from './components/pages/CharacterDetails';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const theme = createTheme();

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <PageHeader />
                <Characters />
              </>
            }
          />
          <Route path='/:id' element={<CharacterDetails />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
