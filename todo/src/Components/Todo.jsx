import react, { useContext } from 'react'
import TodosContext from '../context'

export default function Todo(){
const { state } = useContext(TodosContext)

return (
    <div>
        <ul>
            {state.todos.maps(todo => (
                <li key = {todo.id}>
                    <span>{todo.text}</span>
                </li>
            ))}
        </ul>
    </div>
)
}