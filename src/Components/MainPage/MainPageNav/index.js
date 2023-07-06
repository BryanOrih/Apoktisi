import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const MainPageNav = () => {
  return (
    <div id='MainPageNav'>
      <div className='NavLogo'>
        <img src={require("../../../Images/CompanyName.png")}/>
      </div>
      <div className='NavBarMenu'>
      {/*FIXME - Change the a -> Link Tags for future route */}
        <a>Pricing</a>
        <a>Support</a>
        <span>Resources <i class="fa-solid fa-chevron-down"></i></span>
        <span>Company <i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div className='NavBarRegistration'>
      {/*FIXME - Change div -> Link when created Log and sign up page*/}
        <Link to={'/login'} className='NavBarLogin'>Log In</Link>
        <Link to={'/signup'} className='NavBarSignUp'>
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  )
}

export default MainPageNav