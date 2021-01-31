
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
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

const PokemonListDesktop = () => {

	const [gqlVariables, setGqlVariables] = useState({limit: 20, offset: 0});
	const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
	});
	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	console.log('Response from server', data);
	
	const pokemons = data.pokemons.results.map((pokemon, index) => {
		return (
			<div className="box" key={index} >
				<img src={pokemon.image} width={150} />
				<p className="name" style={{marginTop:0,
					textAlign:'center',
					fontWeight:'bold'
					}}>{titleCase(pokemon.name)}</p>
			</div>
		)
	})
  return (
		<div id="container"> 
			<div className="title-card" >
				<p  className="title" >Pokédex</p>
			</div>
			<div className="box-container" >
			{pokemons}
			</div>

			<div className="title-card" style={{ marginTop: 10, width:'fit-content', borderWidth:2, padding: 5}} onClick={() => loadMore(gqlVariables)}>
				<p className="title" style={{fontSize:16}}>Load More</p>
			</div>
			
		</div>
	)
}

export default PokemonListDesktop