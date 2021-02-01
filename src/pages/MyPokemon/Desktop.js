import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';
import { titleCase } from '../../component/titleCase'

const MyPokemonDesktop = () => {

	const [isReleased, setIsReleased] = useState(false)
	const { myPokemon, removePokemon } = useContext(GlobalContext);
	

	const releasePokemon = (id) => {
		setIsReleased(true)
    removePokemon(id)
	}
  const pokemons = myPokemon.length > 0 ?myPokemon.map((pokemon, index) => {
		return (
				<div className="box" key={index} >
					<Link to={{pathname: '/my-pokemon-detail', state:{id: pokemon.id}}}  style={{textDecoration: 'none'}}> 
						<img src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default} width="150"/>
						<p className="name">{titleCase(pokemon.name)}</p>
					</Link>
					<div className="box-owned" style={{zIndex: 1031}} onClick={()=> releasePokemon(pokemon.id)}>
						<p className="owned-text">Release</p>
					</div>
				</div>
				

		)
	}) : <div>
		<p>There are no Pokemon you have caught</p>
	</div>
	if(!isReleased){
		return(
			<div id="container" style={{marginTop: 50}}>
				<div className="title-card" style={{width:250}}>
					<p  className="title" >My Pokémon</p>
				</div>
				<div className="box-container" >
					{pokemons}
				</div>
			</div>
		)
	}
	else {
		return(
			<div id="container-m">
				<div className="catch-result">
				<p>Your Pokémon is released</p>
				<div className="catch-result-button release" onClick={() => setIsReleased(false)}>
					continue
				</div>
				</div>
			</div>
    	)
	}
	
}

export default MyPokemonDesktop