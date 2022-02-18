import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Navbar from './components/layouts/Navbar';
import PageHeader from './components/layouts/PageHeader';
import Footer from './components/layouts/Footer';
import Album from './components/characters/CharactersList';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Navbar />
        <PageHeader />
        <main>
          <Album />
        </main>
        <Footer />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
