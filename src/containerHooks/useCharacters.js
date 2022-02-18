import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = (page) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
  });

  return {
    data,
    error,
    loading,
  };
};

export default useCharacters;
