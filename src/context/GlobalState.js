import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import useLocalStorage from '../hooks/useLocalStorageHooks'
// const initialState = {
//     myPokemon: [
//         // { id: 1, name: 'Ishan Manandhar', location: 'Kathmandu', designation: 'Frontend Dev' }
//     ]
//     myPokemon: myPokemon
// }

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
    const [myPokemon, setMyPokemon] = useLocalStorage("myPokemon", []);
    
    const initialState = {
        myPokemon: myPokemon
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
        removePokemon,
        addPokemon,
        editPokemonName
    }}>
        {children}
    </GlobalContext.Provider>);
}