
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import './style.less'

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

const loadMore = (gqlVariables) => {

}

const titleCase = (str) => {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}

const PokemonDetailMobile = (props) => {


	const [gqlVariables, setGqlVariables] = useState({name:props.location.state.name});
	const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables,
	});
	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	console.log('Response from server', data);
  
  return (
    <React.Fragment>
      <div id="header">
        <Link to={{pathname:'/'}}>
          <div>
            <img className="back-btn"  
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAATUlEQVRIie3MOxEAIBAD0RSU+KNEAlIQggyEwTF8DOQaZrLbP0Cdiu3CDJumNrNOPkxHFCNGDM0A9UENgYFEiRJFUpmDLlVZZlMuzFdNO/WPEVqT7vQAAAAASUVORK5CYII="
            />
          </div>
        </Link>
        <div>
          <p>Pokémon Detail</p>
        </div>
      </div>
      <div id="container-m">
      
			{/* <div className="title-card-m" >
				<p  className="title" ></p>
			</div>
			<div className="box-container-m" >
			{pokemons}
			</div>

			<div className="title-card-m" style={{ marginTop: 10, width:'fit-content', borderWidth:2, padding: 5}} onClick={() => loadMore(gqlVariables)}>
				<p className="title" style={{fontSize:16}}>Load More</p>
			</div> */}
			
		</div>
    </React.Fragment>
		
	)
}

export default PokemonDetailMobile