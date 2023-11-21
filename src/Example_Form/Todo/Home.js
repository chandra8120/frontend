import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todo,setTodo] = useState([]);
  return (
    <div>
        <h2>Todo-list</h2>
    
        <Create/>
    
        {
            todo.length === 0 ? <div><h1>No record</h1></div> : todo.map(todo =>(
                <div>{todo}</div>

            ))
            

           
        }
    </div>
  )
}

export default Home