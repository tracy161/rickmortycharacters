import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTERS = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = (page, name) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: page,
      name: name
    }
  });

  return {
    data,
    error,
    loading,
  };
};

export default useCharacters;
