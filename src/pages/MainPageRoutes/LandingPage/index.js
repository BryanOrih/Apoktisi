import React from 'react'
import './index.css'
import SampleSearch from '../../../Components/MainPage/SampleSearch'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <h1>Perfect Business Search Tool</h1>
        <p>Are you tired of researching for hours if your business idea is a good fit or how to even start?
             With our search tool, you can get all your answers and even crucial questions you didn't know you needed.
              Use the tool below for one free search!
        </p>
        <SampleSearch/>
        <p>If you’re just starting in business or perhaps want to go on another business venture,
             you need to know the key metrics. That is why Apoktisi is a valuable tool for any entry
              or advanced entrepreneur - providing you with the most up-to-date information on any business you wish to start.
        </p>
        <p>This helps you have the best chance for success by helping you decide if it’s a fit for your skill set and situation.
             Assuring you don’t rethink if you made the right decision while you’re several months and thousands of dollars deep
              into a business you were unsure of. It brings clarity and a head start from your competition by providing
               requirements and common mistakes for beginners.
        </p>
        <Link to={'/signup'}><button>Try it for free</button></Link>
    </div>
  )
}

export default LandingPage