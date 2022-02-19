import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTERS_SEARCH = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const useSearch = (name) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_SEARCH, {
    variables: {
        name: name
    }
  });

  return {
    data,
    error,
    loading,
  };
};

export default useSearch;
