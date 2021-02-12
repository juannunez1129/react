import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import todosContext from './context';
import todosReducer from './reducer';

const App = () => {
  const initialState = useContext(todosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <todosContext.Provider value = {{state, dispatch}}>
      
    </todosContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
