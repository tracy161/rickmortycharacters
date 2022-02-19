import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTER_DETAILS = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
      }
      created
    }
  }
`;

const useCharacterDetails = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id: id },
  });

  return {
    data,
    error,
    loading,
  };
};

export default useCharacterDetails;
