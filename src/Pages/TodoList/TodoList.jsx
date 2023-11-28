import React, { useState } from 'react'
import "./Todo.css"
import Todos from './Todos'

const TodoList = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])
    const [updateItem, setUpdateItem] = useState(false)
    const [update, setUpdate] = useState(0)

    const todoHandler = (e) => {
        e.preventDefault();
    }

    const addTodos = () => {
        if (input.trim() !== '') {
            setTodo([...todo, input]);
            setInput("");
        } else {
            alert("Please enter something!!!");
        }
      };

    

    const getTodo = (id) => {
      const findItem = todo.find((item, i) => i === id)
      setInput(findItem)
      setUpdate(id)
      setUpdateItem(true)
    }

    const updateTodo = () => {
        todo[update] = input;
        setUpdateItem(false)
        setInput("")
    }

    const deleteHandler = (id) => {
        const filterBtn = todo.filter((item, i) => i !== id)
        setTodo(filterBtn)
    }


  return (
    <>
    <div className="container">
        <h1 className='headLine'>Add The To-Do Item</h1>
        <div className="todo-content">
        <form onSubmit={(e) => todoHandler(e)}> 
            <span className='input-field'>
            <label htmlFor="input">Add Todo Item : </label>
            <input onChange={e => setInput(e.target.value)} value={input} id='input' type="text" placeholder='  Write your task....' />
            </span>
            <button
            onClick={updateItem ? updateTodo : addTodos}
            type='submit' className='addBtn'>
                {
                    updateItem ? "Update" : "Add "
                }
            </button>
        </form>
            {
                todo.map((item, i) => <Todos key={i} item={item} index={i} getTodo={getTodo}  handle={deleteHandler}/>)
            }
        </div>
     </div>
    </>
  )
}

export default TodoList
