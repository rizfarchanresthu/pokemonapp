export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_POKEMON':
            return {
                ...state,
                myPokemon: state.myPokemon.filter(pokemon => pokemon.id !== action.payload)
            };
        case 'ADD_POKEMON':
            return {
                ...state,
                myPokemon: [...state.myPokemon, action.payload]
            };
        case 'ADD_CURR_POKEMON':
            return {
                ...state,
                name: action.payload
            };
        case 'ADD_CURR_MY_POKEMON':
            return {
                ...state,
                myPokemonName: action.payload
            };
        case 'EDIT_POKEMON_NAME':
            const updatedPokemon = action.payload;

            const updatedMyPokemon = state.myPokemon.map(pokemon => {
                if (pokemon.id === updatedPokemon.id) {
                    return updatedPokemon;
                }
                return pokemon;
            });

            return {
                ...state,
                myPokemon: updatedMyPokemon
            };
        default: return state;
    }
}