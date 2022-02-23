// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($page: Int, $name: String, $gender: String, $species: String, $status: String, $type: String) {
    characters(page: $page, filter: { name: $name, gender: $gender, species: $species, status: $status, type: $type }) {
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
        gender
        species
        status
        type
      }
    }
  }
`;

const useCharacters = (page, name, gender, species, status, type) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: page,
      name: name,
      gender: gender,
      species: species,
      status: status,
      type: type
    }
  });

  return {
    data,
    error,
    loading,
  };
};

export default useCharacters;
