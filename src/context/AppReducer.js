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
        case 'EDIT_POKEMON_NAME':
            // const updatedEmployee = action.payload;

            // const updatedEmployees = state.employees.map(employee => {
            //     if (employee.id === updatedEmployee.id) {
            //         return updatedEmployee;
            //     }
            //     return employee;
            // });

            // return {
            //     ...state,
            //     employees: updatedEmployees
            // };
        default: return state;
    }
}