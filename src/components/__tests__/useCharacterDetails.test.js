import React from 'react';
import MockedProvider from '@apollo/react-testing';
import renderer from 'react-test-renderer';
import { GET_CHARACTER_DETAILS } from '../../containerHooks/useCharacterDetails';
import { UseCharacterDetails } from '../../containerHooks/useCharacterDetails';

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
      <UseCharacterDetails/>
    </MockedProvider>
  );
});
