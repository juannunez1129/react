export  default function reducer(state, action){
    switch(action.type){
        case "TOGGLE_TODO":
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? {...action.payload, complete:  !action.payload.complete} : t 
                
        );
        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            return {
                ...state,
                todos: filteredTodos
            }
    return {
        ...state,
        todos: toggledTodos
    };

    default:
        return state;
    }
}