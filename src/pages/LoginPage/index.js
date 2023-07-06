import React from 'react'
import './index.css'
import RegularLogin from '../../Components/LoginFunctionality/RegularLogin'
import { Link } from 'react-router-dom'
import ThirdPartyLogin from '../../Components/LoginFunctionality/ThirdPartyLogin'
const LoginPage = () => {
  return (
    <div id='LoginPage'>
      <img src={require('../../Images/CompanyName.png')}/>
      <div className='LoginDiv'>
        <div>
          <h1>Login</h1>
          <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
          <RegularLogin/>
          <div className='loginDivider'>
            <hr/>
            <p>OR</p>
            <hr/>
          </div>
          <ThirdPartyLogin/>
          {/*FIXME - Change a -> Link when creating the Forgot password page */}
          <a>Fogot your password?</a>
        </div>
        <div className='LoginPhoto'>
          <img src={require('../../Images/LoginPagePhoto.png')}/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage