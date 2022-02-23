// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
import { gql, useQuery } from '@apollo/client';

export const GET_CHARACTER_DETAILS = gql`
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

export const UseCharacterDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  //if (loading) return <p>Loading...</p>;

  return {
    data,
    error,
    loading,
  };
};

//export default useCharacterDetails;
