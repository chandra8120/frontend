import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './Post'
import Get from './Get'
import Login from '../SigninLogin/Login'
import Signup from '../SigninLogin/Signup'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/post" element={<Post />} />
            <Route path="/get" element={<Get />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
