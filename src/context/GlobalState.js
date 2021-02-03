import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import useLocalStorage from '../hooks/useLocalStorageHooks'

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
    const [myPokemon, setMyPokemon] = useLocalStorage("myPokemon", []);
    const [name, setName] = useLocalStorage("currPokemonName", []);
    const [myPokemonId, setMyPokemonId] = useLocalStorage("myPokemonId", []);
    const initialState = {
        myPokemon: myPokemon,
        name: name,
        myPokemonId: myPokemonId
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);


    function removePokemon(id) {
        dispatch({
            type: 'REMOVE_POKEMON',
            payload: id
        });
        const newPokemonList = state.myPokemon.filter(pokemon => pokemon.id !== id)
        setMyPokemon([...newPokemonList])
    };

    function addPokemon(pokemon) {
        dispatch({
            type: 'ADD_POKEMON',
            payload: pokemon
        });
        setMyPokemon([...state.myPokemon, pokemon])
    };

    function addName(name) {
        dispatch({
            type: 'ADD_CURR_POKEMON',
            payload: name
        });
        setName(name)
    };

    function addMyPokemonId(id) {
        dispatch({
            type: 'ADD_CURR_MY_POKEMON',
            payload: id
        });
        setMyPokemonId(id)
    };

    function editPokemonName(pokemon) {
        
        dispatch({
            type: 'EDIT_POKEMON_NAME',
            payload: pokemon
        });
        const updatedPokemon = pokemon
        const updatedMyPokemon = state.myPokemon.map(pokemon => {
            if (pokemon.id === updatedPokemon.id) {
                return updatedPokemon;
            }
            return pokemon;
        });

        setMyPokemon(updatedMyPokemon)
    };

    return (<GlobalContext.Provider value={{
        myPokemon: state.myPokemon,
        name: state.name,
        myPokemonId: state.myPokemonId,
        removePokemon,
        addPokemon,
        editPokemonName,
        addName,
        addMyPokemonId
    }}>
        {children}
    </GlobalContext.Provider>);
}