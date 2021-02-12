import react from 'react';

const TodosContext = react.createContext({
    todos: [
        {id: 1, text: "React todo exercise", complete: false},
        {id: 2, text: "React news exercise", complete: false},
        {id: 3, text: "Capstone-1", complete: false}

    ],
    currentTodo: {}
});

export default TodosContext;