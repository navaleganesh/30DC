import React, { useDebugValue, useState } from 'react'

const Todo = () => {
const [inputValue, setInputValue] = useState('');


const [todos, setTodos] = useState([]);

const [editMode, setEditMode] = useState(false);
const [editId, setEditId] = useState(null);
const [editValue, setEditValue] = useState('');


const handleAddTodo = () => {
    if(inputValue.trim() !== ''){
        const newTodo = {
            id: new Date().getTime(),
            text:inputValue  
        }

        setTodos([...todos, newTodo]);
        setInputValue('');
    }
}

const deleteTodo = (id)=>{
    const updateTodos = todos.filter(
        (todo)=>  todo.id !== id )
        setTodos(updateTodos)
}
const enterEdit = (id,text) =>{
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
}

const newUpdateTodo = () => {
    const updatedTodos = todos.map((item)=>{
        if(item.id === editId){
            return {...item, text:editValue}
        }
        return item
    })
    setTodos(updatedTodos)
    setEditMode(false)
    setEditId(null)
    setEditValue('')
}


return (
    <div className='todo-container'>
           <h2>ToDo List</h2>
           <input
            type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value) } 
            /> 

            {
             editMode ? (
                <div>
                  <input
                   type="text"
                   value={editValue}
                   onChange={(e)=>setEditValue(e.target.value)}
                    />
                    <button onClick={newUpdateTodo}>Update</button>
                </div>
            ): (
                <button onClick={handleAddTodo}>Add</button>
            )   
            }
           
           <ul>
            {
                todos.map((item)=>(
                    <li key={item.id}>
                        {item.text}
                        <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                        <button onClick={()=>enterEdit(item.id, item.text)}>Edit</button>
                    </li>
                ))
            }
           </ul>
    </div>
  )
}

export default Todo