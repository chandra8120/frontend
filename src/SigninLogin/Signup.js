import { Button, Card, TextField } from '@mui/material'
import logo from './logo1.svg'
import logo1 from './logo2.svg'
import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [data,setData]=useState({username:"",password:""})
  const [show,setShow]=useState('')
  const {username,password}=data
  const change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3501/signup', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    if(username&&password){
   navigate('/')
    }
    else{
      setShow("Fill the inputs field !!!")
    }
  };

  const navigate=useNavigate()
  return (
    <div className='main'>
      <div className='first-div'>
        <img src={logo} alt='img1'/>
        <img style={{width:"100%",height:"100%"}} src={logo1} alt='img2'/>
        <h2 style={{color:"white"}}>Getting started with VR creations</h2>
      </div>

      <div className='second-div'>


<div className='form-container'>

<Card className='form'>
<h2>Registration form</h2>
<TextField id="outlined-basic" label="username" variant="standard" name='username' value={username} onChange={change}/>
<TextField id="outlined-basic" label="password" variant="standard" name='password' value={password} onChange={change}/>
<div><Button onClick={handleSignup} sx={{width:"100%",background:"#1E4759"}} variant='contained'>Create Account</Button></div>
<div style={{fontSize:"12px"}} onClick={()=>navigate('/')}>Already Have account?  <span style={{cursor:"pointer"}}>Login</span></div>
<div style={{color:"red"}}>{show}</div>
</Card>
</div>
</div>

    </div>
  )
}

export default Signup
