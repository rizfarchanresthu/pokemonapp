
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import usePokemonList from '../../hooks/usePokemonListHooks'
import { GlobalContext } from '../../context/GlobalState';
import { titleCase, titleCaseDash } from '../../component/titleCase'

const PokemonListMobile = () => {

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { myPokemon } = useContext(GlobalContext);
  
  const { loading, error, data } = usePokemonList(limit, offset);
  if (error) return `Error! ${error.message}`;

  

  if (loading) return (
    <div className="img-loading">
      <img width="80" src="https://imgur.com/nJrgSrv.png" alt="https://imgur.com/nJrgSrv.png" />
    </div>
  );

  const loadMore = () => {
    setLimit(prevLimit => prevLimit+10)
  }

  const pokemonList =  data.pokemons.results
  
  const pokemons = pokemonList.map((pokemon, index) => {
		return (
			<Link to={{pathname: '/pokemon-detail', state:{name: pokemon.name}}} key={index} className="link"> 
				<div className="box-m" >
					<img src={pokemon.image} alt={pokemon.image} />
					<p className="name">{titleCase(titleCaseDash(pokemon.name))}</p>
          <div className="box-owned">
            <p className="owned-text">Owned: {Object.keys(myPokemon.filter(obj => obj.pokedex == pokemon.id)).length}</p>
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
      <div className="title-card-m" style={{ marginTop: 10, width:'fit-content', borderWidth:2, padding: 5}} onClick={() => loadMore()}>
        <p className="title" style={{fontSize:16}}>Load More</p>
      </div>
      <div style={{fontSize:8}}>Pokéball icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
      <div style={{fontSize:8,marginBottom: 70}}>Pokédex icon from <a href="https://www.visualpharm.com/free-icons/pokedex-595b40b65ba036ed117d221c">VisualPharm</a></div>
    </div>
	)
}

export default PokemonListMobile