
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import usePokemonDetailHooks from '../../hooks/usePokemonDetailHooks'
import './style.less' 
import { GlobalContext } from '../../context/GlobalState';



const PokemonDetailMobile = (props) => {
  let history = useHistory();
  const { myPokemon, addPokemon, removePokemon, editPokemonName } = useContext(GlobalContext);
  const [name, setName] = useState(props.location.state.name);
  const [isCaught, setIsCaught] = useState("none")
	const { loading, error, data } = usePokemonDetailHooks(name)
	if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data);
  
  const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  const titleCaseDash = (str) => {
    var splitStr = str.toLowerCase().split('-');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
  
  const pokemonDetail = data.pokemon

  const catchPokemon = (pokemon) => {
    // console.log(pokemon)
    let pokemonCaught = {
      id: myPokemon.length == 0 ? 1 : Number(myPokemon[myPokemon.length-1].id) + 1,
      name: pokemon.name,
      sprites: pokemon.sprites,
      types:pokemon.types,
      moves: pokemon.moves
    }
    let math = Math.floor(Math.random()*10)
    if(math%2 == 0){
      setIsCaught("caught")
      addPokemon(pokemonCaught)
      // console.log(myPokemon)
      // history.push("/my-pokemon");
    }else {
      setIsCaught("flee")
    }
  }

  const next = () => {
    // console.log(myPokemon.length == 0 ? 1 : Number(myPokemon[myPokemon.length-1].id))
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
        <div id="header">
            <div onClick={() => history.goBack()}>
              <img className="back-btn"  
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAATUlEQVRIie3MOxEAIBAD0RSU+KNEAlIQggyEwTF8DOQaZrLbP0Cdiu3CDJumNrNOPkxHFCNGDM0A9UENgYFEiRJFUpmDLlVZZlMuzFdNO/WPEVqT7vQAAAAASUVORK5CYII="
              />
            </div>
          <div>
            <p>Pokémon Detail</p>
          </div>
        </div>
        <div id="container-m">
          <div className="container-head">
            <img className="image" src={pokemonDetail.sprites.front_default} />
            <div className="box-name">
              <p className="name">{titleCase(pokemonDetail.name)}</p>
            </div>
            {/* {isCaught ? <div onClick={()=> releasePokemon(pokemonDetail.id)}>
              Remove
              </div> : null} */}
            <div onClick={()=> catchPokemon(pokemonDetail)}>
              <p>Catch</p>
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
      <div id="container-m">
        <p>Failed to catch</p>
        <div onClick={() => setIsCaught('none')}>
          return 
        </div>
      </div>
    )
  } else {
    return (
      <div id="container-m">
        <p>Caught!</p>
        <div onClick={() => next(pokemonDetail)}>
          continue 
        </div>
      </div>
    )
  }
  
}

export default PokemonDetailMobile