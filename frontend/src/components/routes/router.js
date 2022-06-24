import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Forgot from '../forgot/forgot'
import Home from '../home'
import Login from '../registration/login'
import Signup from '../registration/signup'
import Protect from '../routes/protect'
const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<Forgot/>}/>
      </Routes>
  )
}

export default Router