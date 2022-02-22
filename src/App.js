import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Navbar from './components/layouts/Navbar';
import { Routes, Route } from 'react-router-dom';

import PageHeader from './components/layouts/PageHeader';
import Footer from './components/layouts/Footer';
import Characters from './components/pages/Characters';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CharacterDetails from './components/pages/CharacterDetails';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
