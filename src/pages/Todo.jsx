import { useState } from "react";
let Todo = () => {

    
    let [todos, setTodos] = useState([])
    
    
    let [title, setTitle] = useState('')

    
    const addTodo = () => {
        
        let newTodo = {
            title:title,
            completed:false
        }
        
        let updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)

        setTitle('');
    }
    
    const deleteTodo = (index) => {
        let updatedTodos = todos.filter((todo, i) => {return i !== index})
        setTodos(updatedTodos)
    }
    
    const completeTodo = (index) => {
        let updatedTodos = [...todos]
        updatedTodos[index].completed = true
        setTodos(updatedTodos)        
    }
    
    
    
    
    
    return (
        <>
        <h1>Todo List</h1>
        <input type="text" placeholder="Titel" onChange={(event) => setTitle(event.target.value)}></input>
        <button onClick={addTodo} className="todoAddBtn">Lägg till</button>
        <ul>
            {todos.map((todo, index) => <li key={index}>
                <h2 className={todo.completed ? 'completed' : ""}>{todo.title}</h2>
                    <div className="todoBtns">

                    <button onClick={() => deleteTodo(index)}>Delete</button>
                    <button onClick={() => completeTodo(index)}>Completed</button>
                    </div>
               
            </li>)}
        </ul>
        </>
    )
}
    
    export default Todo;