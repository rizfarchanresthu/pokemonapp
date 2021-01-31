import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import { GlobalContext } from '../../context/GlobalState';


const MyPokemonMobile = () => {

  const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const [isReleased, setIsReleased] = useState(false)
	const { myPokemon, removePokemon } = useContext(GlobalContext);
	

	const titleCase = (str) => {
		var splitStr = str.toLowerCase().split(' ');
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
  }

	const releasePokemon = (id) => {
		setIsReleased(true)
    removePokemon(id)
	}
  const pokemons = myPokemon.length > 0 ?myPokemon.map((pokemon, index) => {
		return (
				<div className="box-m" key={index} >
					<Link to={{pathname: '/my-pokemon-detail', state:{id: pokemon.id}}}  style={{textDecoration: 'none'}}> 
						<img src={pokemon.sprites.front_default} />
						<p className="name">{titleCase(pokemon.name)}</p>
					</Link>
					<div className="box-owned" style={{zIndex: 1031}} onClick={()=> releasePokemon(pokemon.id)}>
						<p className="owned-text">Release</p>
					</div>
				</div>
				
			
		)
	}) : <div>
		There are no Pokemon you have caught
	</div>
	if(!isReleased){
		return(
			<div id="container-m">
				<div className="title-card-m" style={{width:250}}>
					<p  className="title" >My Pokémon</p>
				</div>
				<div className="box-container-m" >
					{pokemons}
				</div>
			</div>
		)
	}
	else {
		return(
      <div>
        Your Pokémon is released
        <div onClick={() => setIsReleased(false)}>
          continue
        </div>
      </div>
    )
	}
	
}

export default MyPokemonMobile