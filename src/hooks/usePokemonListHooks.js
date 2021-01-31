import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
				image
      }
    }
  }
`;

export default (limit, offset) => {
  return useQuery(GET_POKEMONS, {
    fetchPolicy: "network-only",
    variables: {
      limit: limit,
      offset: offset
    },
  });
}