import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
  
  const handleLogin = async (e)=>{
    e.preventDefault()
    try {
     await axios.post('http://localhost:4000/api/users/auth',{
    email:email,password:password
   
  })
  console.log('logged in')
  setEmail('')
  setName('')
  setPassword('')
  navigate('/upload')
  
    } catch (error) {
      console.log(error)
    }
  
  }
  
  
  
    return (
      <div>
        <form onSubmit={handleLogin}>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button type='submit'>Login</button>
  
        </form>
      </div>
    )
  
}

export default Login