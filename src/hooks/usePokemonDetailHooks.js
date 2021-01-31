import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
          front_default
      }
      moves {
          move {
          name
          }
      }
      types {
          type {
          name
          }
      }
    }
  }
`;

export default (name) => {
  return useQuery(GET_POKEMON, {
    fetchPolicy: "network-only",
    variables: {
      name
    },
  });
}