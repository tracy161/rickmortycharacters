import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import {
  GET_CHARACTER_DETAILS,
  UseCharacterDetails,
} from '../containerHooks/useCharacterDetails';
import CharacterDetails from '../components/pages/CharacterDetails';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_DETAILS,
      variables: {
        id: 1,
      },
    },
    result: {
      data: {
        character: {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          gender: 'Male',
        },
      },
    },
  },
];

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterDetails />
    </MockedProvider>
  );
});
