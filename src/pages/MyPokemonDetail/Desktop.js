
import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';
import { titleCase, titleCaseDash } from '../../component/titleCase'


const MyPokemonDetailDesktop = (props) => {
  let history = useHistory();
  const { myPokemon, removePokemon, editPokemonName, myPokemonId, addMyPokemonId } = useContext(GlobalContext);
  useEffect(()=> {
    if(props.location.state) addMyPokemonId(props.location.state.id)
  },[])
  const [isReleased, setIsReleased] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [nameEdit, setNameEdit] = useState("")
  
  const pokemonDetail = myPokemon.filter(pokemon => pokemon.id == myPokemonId || props.location.state.id);  

  const releasePokemon = (id) => {
    setIsReleased(true)
    removePokemon(id)
  }

  const editName = (pokemon) => {
    const checkName = myPokemon.map(listPokemon => {
      if(listPokemon.id !== pokemon.id){
        if(titleCase(pokemon.name) ===  nameEdit){
          return true
        }  else {
          return false
        }
      }
    })
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

  const types = !isReleased ? pokemonDetail.length > 0 ? pokemonDetail[0].types.map((type, index) => {
    return(
      <div className={`container-type ${type.type.name}`} key={index}>
        <p className="type-name">{titleCase(type.type.name)}</p>
      </div>
    )
  }) : null : null

  const moves = !isReleased ? pokemonDetail.length > 0 ? pokemonDetail[0].moves.map((move, index) => {
    return(
      <div className="container-move" key={index}>
        <p className="move-name">{titleCaseDash(move.move.name)}</p>
      </div>
    )
  }) :null :null

  if(isReleased) {
    return(
      <div id="container-m">
        <div className="catch-result" >
          <p>Your Pokémon is released</p>
          <div className="catch-result-button release" onClick={() => history.push('/my-pokemon')}>
            continue
          </div>
        </div>
      </div>
    )
  }else {
    if(pokemonDetail.length == 0) {
      history.push("/my-pokemon")
      return (
        <div></div>
      )
    } else {
      return (
        <React.Fragment>
          <div id="container" style={{display: 'flex', flexDirection:'row-reverse', marginTop:100}}>
            <div className="container-head">
              <img className="image" src={pokemonDetail[0].sprites.front_default} alt={pokemonDetail[0].sprites.front_default}/>
              <div style={{display: 'flex'}}>
                <div className="box-name">
                  {!isEdit ? <p className="name">{titleCase(pokemonDetail[0].name)}</p> : 
                  <input 
                    className="form-input-name"
                    type="text"
                    placeholder="Enter Nickname"
                    value={nameEdit}
                    defaultValue={pokemonDetail[0].name}
                    onChange={e => setNameEdit(titleCase(e.target.value))} 
                    onBlur={()=> editName(pokemonDetail[0])}
                  />
                }
                  
                </div>
                <div className="edit-button" onClick={()=> setIsEdit(prevIsEdit => !prevIsEdit)}>
                  <img src="https://imgur.com/9jznV3l.png"  alt="https://imgur.com/9jznV3l.png" style={{width:50}} />
                </div>
              </div>
              <div className="catch-button" onClick={()=> releasePokemon(pokemonDetail[0].id)}>
                <p className="catch-text">Release</p>
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
}

export default MyPokemonDetailDesktop