import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';

import useSearch from '../../containerHooks/useSearch';

import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';

const GET_CHARACTERS_SEARCH = gql`
  query GetCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const SearchBar = () => {
  const [name, setName] = useState('');

  const [getCharacters, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTERS_SEARCH,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ called, data, loading, error });

  return (
    <>
      <Paper
        component='form'
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Characters'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={() => getCharacters()}>Search</Button>
      </Paper>
      {data && (
        <ul>
          {data.characters.results.map((item) => (
            <p>{item.name}</p>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
