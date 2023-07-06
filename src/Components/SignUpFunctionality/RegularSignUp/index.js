import React, { useState } from 'react'
import axios from 'axios'
import './index.css'
const RegularSignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: '',
    firstName: '',
    lastName: '',
    mobilePhone: ''
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    const isEmpty = Object.values(input).some(x => x === null || x === '');
    if(isEmpty) return
    axios({
      method: "POST",
      url: "/createuser",
      data:{
        email: `${input.email}`,
        password: `${input.password}`,
        firstName: `${input.firstName}`,
        lastName: `${input.lastName}`,
        mobilePhone: input.mobilePhone
      }
    })
    setInput({
      email: "",
      password: '',
      firstName: '',
      lastName: '',
      mobilePhone: ''
    })
  }
  return (
    <form onSubmit={handleSubmit} className='RegularSignUpForm'>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' value={input.email} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' value={input.password} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <label htmlFor='firstName'>First Name</label>
      <input type='text' name='firstName' value={input.firstName} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <label htmlFor='lastName'>Last Name</label>
      <input type='text' name='lastName' value={input.lastName} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <label htmlFor='mobilePhone'>Mobile Phone</label>
      <input type='number' name='mobilePhone' value={input.mobilePhone} onChange={(e)=>{setInput({...input, [e.target.name]: e.target.value})}}/>
      <button>Sign Up</button>
    </form>
  )
}

export default RegularSignUp