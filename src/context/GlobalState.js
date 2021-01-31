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
    // console.log('a',myPokemon, initialState)
    const [state, dispatch] = useReducer(AppReducer, initialState);


    function removePokemon(id) {
        dispatch({
            type: 'REMOVE_POKEMON',
            payload: id
        });
        const newPokemonList = state.myPokemon.filter(pokemon => pokemon.id !== id)
        console.log(newPokemonList)
        setMyPokemon([...newPokemonList])
    };

    function addPokemon(pokemon) {
        dispatch({
            type: 'ADD_POKEMON',
            payload: pokemon
        });
        setMyPokemon([...state.myPokemon, pokemon])
    };

    function editPokemon(id) {
        dispatch({
            type: 'EDIT_POKEMON_NAME',
            payload: id
        });
    };

    return (<GlobalContext.Provider value={{
        myPokemon: state.myPokemon,
        removePokemon,
        addPokemon,
        editPokemon
    }}>
        {children}
    </GlobalContext.Provider>);
}