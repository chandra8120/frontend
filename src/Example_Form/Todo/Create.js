import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState([]);
  const handleChange = () => {
    axios.post('http://localhost:3003/add', { task: task }).
      then(res => console.log(res)).
      catch(err => console.log(err));
  }
  return (
    <div>
      <input type='text' placeholder='Enter your name' onChange={(e) => setTask(e.target.value)} ></input>
      <button on onClick={handleChange}>ADD</button>
    </div>
  )
}

export default Create
