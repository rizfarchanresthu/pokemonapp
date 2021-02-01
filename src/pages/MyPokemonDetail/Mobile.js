
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import usePokemonDetailHooks from '../../hooks/usePokemonDetailHooks'
import './style.less' 
import { GlobalContext } from '../../context/GlobalState';



const MyPokemonDetailMobile = (props) => {
  // console.log(props)
  let history = useHistory();
  const { myPokemon, removePokemon, editPokemonName } = useContext(GlobalContext);
  const [isReleased, setIsReleased] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [nameEdit, setNameEdit] = useState("")
  
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
  // console.log('c', props)
  const pokemonDetail = myPokemon.filter(pokemon => pokemon.id == props.location.state.id)

  const releasePokemon = (id) => {
    setIsReleased(true)
    removePokemon(id)
    // history.push("/my-pokemon");
  }

  const editName = (pokemon) => {
    // console.log('b',pokemon, nameEdit)
    const checkName = myPokemon.map(pokemon => {
      // console.log('a',pokemon.name, nameEdit)
      if(pokemon.name ===  nameEdit){
        return true
      }  else {
        return false
      }
    })
    console.log(checkName[0])
    if(checkName.includes(true)){
      alert("Name has already been used")
    }else {
      const updatedPokemon ={
        id: pokemon.id,
        pokedex: pokemon.pokedex,
        name: nameEdit,
        types: pokemon.types,
        moves: pokemon.moves,
        sprites: pokemon.sprites
      }
      setIsEdit(prevIsEdit => !prevIsEdit)
      editPokemonName(updatedPokemon)
    }
    
  }

  const types = !isReleased ? pokemonDetail[0].types.map((type, index) => {
    return(
      <div className={`container-type ${type.type.name}`} key={index}>
        <p className="type-name">{titleCase(type.type.name)}</p>
      </div>
    )
  }) : null

  const moves = !isReleased ? pokemonDetail[0].moves.map((move, index) => {
    return(
      <div className="container-move" key={index}>
        <p className="move-name">{titleCaseDash(move.move.name)}</p>
      </div>
    )
  }) :null

  if(isReleased) {
    return(
      <div>
        Your Pokémon is released
        <div onClick={() => history.push('/my-pokemon')}>
          continue
        </div>
      </div>
    )
  }else {
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
            <img className="image" src={pokemonDetail[0].sprites.front_default} />
            <div className="box-name">
              {!isEdit ? <p className="name">{titleCase(pokemonDetail[0].name)}</p> : 
              // <form onSubmit={()=> editName(pokemonDetail[0])}>
              <input 
                className="form-input-name"
                type="text"
                placeholder="Enter Nickname"
                value={nameEdit}
                onChange={e => setNameEdit(titleCase(e.target.value))} 
                onBlur={()=> editName(pokemonDetail[0])}
              />

              // </form>
             }
              
            </div>
            <div onClick={()=> setIsEdit(prevIsEdit => !prevIsEdit)}>
              Edit
            </div>
            <div onClick={()=> releasePokemon(pokemonDetail[0].id)}>
              <p>Release</p>
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
  }
}

export default MyPokemonDetailMobile