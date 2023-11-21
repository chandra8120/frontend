// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [data, setData] = useState({ name: "", username: "", email: "" });
  const { name, username, email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3501/data", data);

      console.log(response.data); 
      setData({ name: "", username: "", email: "" });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' onChange={changeHandler} name='name' value={name} placeholder='name' /><br/>
        <input type='text' onChange={changeHandler} name='username' value={username} placeholder='username' /><br/>
        <input type='email' onChange={changeHandler} name='email' value={email} placeholder='email' /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;















