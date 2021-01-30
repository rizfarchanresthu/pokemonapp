
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

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

var gqlVariables = {
  limit: 12,
  offset: 0,
};
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

	// const [gqlVariables, setGqlVariables] = useState({limit: 12, offset: 0});
	const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
	});
	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	console.log('Response from server', data);
	
	const pokemons = data.pokemons.results.map((pokemon, index) => {
		return (
			<div className="box" key={index} css={{width:100, 
				marginLeft:5,
				// borderStyle:'solid',
				// borderWidth: 2,
				// borderColor:'#ffca38',
				boxShadow: '0 1px 6px 1px #bababa',
				borderRadius: 5,
				marginTop: 5
				}}>
				<img src={pokemon.image} />
				<p css={{marginTop:0,
					textAlign:'center',
					fontWeight:'bold'
					}}>{titleCase(pokemon.name)}</p>
			</div>
		)
	})
  return (
		<div className="container"  css={{height:'100%', 
			width:'100%', 
			padding:10
			}}>
			<div css={{borderStyle:'solid', 
				borderWidth:4, 
				borderColor:'#ffca38',
				backgroundColor:'grey', 
				borderRadius:5, 
				width:180,
				marginLeft:'auto', 
				marginRight:'auto',
				marginBottom: 10,
				}}>
				<p css={{fontSize:36, 
					fontWeight:'bold', 
					color:'#ffca38', 
					textAlign:'center',
					margin:0
					}}>Pokédex</p>
			</div>
			<div css={{display: 'flex',
				flexWrap: 'wrap'
				}}>
			{pokemons}
			</div>

			<div css={{borderColor:'#ffca38',
				backgroundColor:'grey', 
				borderWidth:1,
				borderRadius:5, 
				width:'fit-content',
				padding:5,
				marginLeft:'auto', 
				marginRight:'auto',
				marginBottom: 10,
				marginTop: 10
				}} onClick={() => loadMore(gqlVariables)}>
				<p css={{fontSize:16, 
					fontWeight:'bold', 
					color:'#ffca38', 
					textAlign:'center',
					margin:0
					}}>Load More</p>
			</div>
			
		</div>
	)
}

export default PokemonListMobile