import React, { useState } from 'react'
import './index.css'
const RegularLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (e) =>{
    e.preventDefault()



  }
  return (
    <form className='RegularLoginForm' onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' value={input.email} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' value={input.password} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <button>Sign In</button>
    </form>
  )
}

export default RegularLogin