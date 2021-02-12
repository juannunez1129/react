import react, { useContext } from 'react'
import TodosContext from '../context'

export default function Todo(){
const { state,dispatch } = useContext(TodosContext);
const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do today!"

return (
    <div className="container mx-auto max-w-md text-center font-mono">
        <h1 className = "text-bold">{title}</h1>
        <ul className = "list-reset text-black p-0">
            {state.todos.map(todo => (
                <li key = {todo.id} className = "flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4">
                    <span 
                    onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })} 
                    className ={`flex-1 m1-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}>{todo.text}</span>
                <button
                    onClick={()=> dispatch({ type: "SET_CURRENT_TODO", payload: todo})}
                >
                <img src="https://img.icons8.com/android/24/000000/edit.png" alt= "Edit icon" className = "h-6"/>
                </button>

                <button
                    onClick = {() => dispatch({ type: "REMOVE_TODO", payload: todo})}
                >
                    <img src="https://img.icons8.com/ios/100/000000/delete-sign--v1.png" alt= "Delete icon" className = "h-6"/>
                </button>

                </li>
            ))}
        </ul>
    </div>
);
}