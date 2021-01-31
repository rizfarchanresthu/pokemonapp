
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import usePokemonList from '../../hooks/usePokemonListHooks'
// import { PokemonProvider } from '../../provider/refetchProvider'
import { GlobalContext } from '../../context/GlobalState';

const PokemonListMobile = () => {

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { myPokemon, addPokemon, removePokemon, editPokemonName } = useContext(GlobalContext);
  
  const { loading, error, data } = usePokemonList(limit, offset);
  if (error) return `Error! ${error.message}`;

  // console.log('Response from server', data);

	const titleCase = (str) => {
		var splitStr = str.toLowerCase().split(' ');
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
  }


  const loadMore = () => {
    setLimit(prevLimit => prevLimit+10)
    // setOffset(prevOffset => prevOffset+limit)
    // fetchMore();
  }

  if (loading) return (
    'LOADING'
  );

  const pokemonList =  data.pokemons.results

  console.log('a', Object.keys(myPokemon.filter(obj => obj.name == 'bulbasaur')).length)
  
  const pokemons = pokemonList.map((pokemon, index) => {
		return (
			<Link to={{pathname: '/pokemon-detail', state:{name: pokemon.name}}} key={index} className="link"> 
				<div className="box-m" >
					<img src={pokemon.image} />
					<p className="name">{titleCase(pokemon.name)}</p>
          <div className="box-owned">
            <p className="owned-text">Owned: {Object.keys(myPokemon.filter(obj => obj.name == pokemon.name)).length}</p>
          </div>
				</div>
			</Link>
		)
	})

	return(
    <div id="container-m">
      <div className="title-card-m" >
        <p  className="title" >Pokédex</p>
      </div>
      <div className="box-container-m" >
        {pokemons}
      </div>
      <div className="title-card-m" style={{ marginTop: 10, width:'fit-content', borderWidth:2, padding: 5, marginBottom:75}} onClick={() => loadMore()}>
        <p className="title" style={{fontSize:16}}>Load More</p>
      </div>
    </div>
	)
}

export default PokemonListMobile