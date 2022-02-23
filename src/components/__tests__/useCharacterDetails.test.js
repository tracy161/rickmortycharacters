import React from 'react';
import MockedProvider from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';
import { GET_CHARACTER_DETAILS, UseCharacterDetails } from '../../containerHooks/useCharacterDetails';
import CharacterDetails from '../pages/CharacterDetails';

const mocks = [
  {
    request: {
      query: GET_CHARACTER_DETAILS,
      variables: {
        id: 1,
      },
    },
    error: new Error('An error occurred'),
  },
];

test('renders without error', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterDetails />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain('An error occurred');
});
