import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

  return {
    data,
    error,
    loading,
  };
};

//export default useCharacterDetails;
