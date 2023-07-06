import React, { useState } from 'react'
import './index.css'
import SampleResults from '../SampleResults'
const SampleSearch = () => {
  const [input, setInput] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='SampleSearchContainer'>
      <h3>Give it a try! Search for any business!</h3>
      <form onSubmit={handleSubmit}>
        <label>Business Category</label>
        <input placeholder='ex: landscaping' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button>Search</button>
      </form>
      <div className='SampleResults'>
        <SampleResults/>
      </div>
    </div>
  )
} 

export default SampleSearch