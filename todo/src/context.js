import react from 'react';

const todosContext = react.createContext({
    todos: [
        {id: 1, text: "Eat breakfast", complete: false},
        {id: 2, text: "Do laundry", complete: false},
        {id: 3, text: "Finish project", complete: true},

    ]
})

export default todosContext;