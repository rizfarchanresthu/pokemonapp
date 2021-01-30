
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import './style.less'

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
				image
      }
    }
  }
`;

const loadMore = (gqlVariables) => {

}

const titleCase = (str) => {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}

const PokemonListMobile = () => {

	const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
			limit: limit,
			offset: offset
		},
	});
	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	console.log('Response from server', data);
	
	const pokemons = data.pokemons.results.map((pokemon, index) => {
		return (
			<Link to={{pathname: '/pokemon-detail', state:{name: pokemon.name}}} key={index} style={{textDecoration: 'none'}}> 
				<div className="box-m" >
					<img src={pokemon.image} />
					<p className="name">{titleCase(pokemon.name)}</p>
				</div>
			</Link>
		)
	})
  return (
		<div id="container-m">
			<div className="title-card-m" >
				<p  className="title" >Pokédex</p>
			</div>
			<div className="box-container-m" >
			{pokemons}
			</div>

			<div className="title-card-m" style={{ marginTop: 10, width:'fit-content', borderWidth:2, padding: 5}} onClick={() => loadMore({limit, offset})}>
				<p className="title" style={{fontSize:16}}>Load More</p>
			</div>
			
		</div>
	)
}

export default PokemonListMobile