
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import usePokemonDetailHooks from '../../hooks/usePokemonDetailHooks'
import './style.less' 
import { GlobalContext } from '../../context/GlobalState'
import { titleCase, titleCaseDash } from '../../component/titleCase'



const PokemonDetailDesktop = (props) => {
    console.log(props)
  let history = useHistory();
  const { myPokemon, addPokemon, removePokemon, editPokemonName } = useContext(GlobalContext);
  const [name, setName] = useState(props.location.state.name);
  const [isCaught, setIsCaught] = useState("none")
	const { loading, error, data } = usePokemonDetailHooks(name)
	if (loading) return (
  <div className="img-loading">
    <img width="80" src="https://imgur.com/nJrgSrv.png" alt="https://imgur.com/nJrgSrv.png" />
  </div>
  );
  if (error) return `Error! ${error.message}`;
  
  const pokemonDetail = data.pokemon

  const catchPokemon = (pokemon) => {
    let pokemonCaught = {
      id: myPokemon.length == 0 ? 1 : Number(myPokemon[myPokemon.length-1].id) + 1,
      pokedex: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites,
      types:pokemon.types,
      moves: pokemon.moves
    }
    let math = Math.floor(Math.random()*10)
    if(math%2 == 0){
      setIsCaught("caught")
      addPokemon(pokemonCaught)
    }else {
      setIsCaught("flee")
    }
  }

  const next = () => {
    history.push({pathname: '/my-pokemon-detail',
    state: { id: Number(myPokemon[myPokemon.length-1].id)}})
  }

  const types = pokemonDetail.types.map((type, index) => {
    return(
      <div className={`container-type ${type.type.name}`} key={index}>
        <p className="type-name">{titleCase(type.type.name)}</p>
      </div>
    )
  })

  const moves = pokemonDetail.moves.map((move, index) => {
    return(
      <div className="container-move" key={index}>
        <p className="move-name">{titleCaseDash(move.move.name)}</p>
      </div>
    )
  })
  if(isCaught == 'none'){
    return (
      <React.Fragment>
        <div id="container" style={{display: 'flex', flexDirection:'row-reverse', marginTop:100}}>
          <div className="container-head">
            <img className="image" src={pokemonDetail.sprites.front_default} alt={pokemonDetail.sprites.front_default} />
            <div className="box-name">
              <p className="name">{titleCase(pokemonDetail.name)}</p>
            </div>
            {/* {isCaught ? <div onClick={()=> releasePokemon(pokemonDetail.id)}>
              Remove
              </div> : null} */}
            <div className="catch-button" onClick={()=> catchPokemon(pokemonDetail)}>
              <p className="catch-text">Catch</p>
            </div>
            <div className="box-type">
              {types}
            </div>
          </div>
          <div className="container-body" >
            <p className="title-move">Moves</p>
            <div className="box-move">
              {moves}
            </div>
          </div>   
        </div>
      </React.Fragment>
    )
  } else if (isCaught == 'flee'){
    return (
      <div id="container">
        <div className="catch-result">
          <p>Failed to catch</p>
          <div className="catch-result-button failed" onClick={() => setIsCaught('none')}>
            return 
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="container">
        <div className="catch-result">
          <p>Caught!</p>
          <div className="catch-result-button success" onClick={() => next(pokemonDetail)}>
            continue 
          </div>
        </div>
      </div>
    )
  }
  
}

export default PokemonDetailDesktop