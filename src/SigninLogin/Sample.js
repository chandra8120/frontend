import React, { useState } from 'react';
import axios from 'axios';

const Sample = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3501/signup', { Email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3501/login', { Email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>Email: </label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignup}>Signup</button>

      <hr />

      <h2>Login</h2>
      <label>Email: </label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Sample


