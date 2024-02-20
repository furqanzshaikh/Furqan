import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {


  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


const handleSubmit = async (e)=>{
  e.preventDefault()
  try {
   await axios.post('http://localhost:4000/api/users/',{
  email:email,name:name,password:password
})
setEmail('')
setName('')
setPassword('')

  } catch (error) {
    console.log(error)
  }

}



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} />
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
      <button type='submit'>Register</button>

      </form>
    </div>
  )
}

export default Register