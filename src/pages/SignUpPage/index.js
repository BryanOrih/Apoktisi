import React from 'react'
import './index.css'
import RegularSignUp from '../../Components/SignUpFunctionality/RegularSignUp'
import { Link } from 'react-router-dom'
const SignUpPage = () => {
  return (
    <div id='SignUpPage'>
      <img src={require('../../Images/CompanyName.png')}/>
      <div className='SignUpDiv'>
        {/*SECTION - Left half of the sign up page */}
        <div>
          <h1>Sign Up</h1>
          <RegularSignUp/>
          <Link to={'/login'}>Back to sign in</Link>
        </div>
        {/*SECTION - Right half of the sign up page */}
        <div>
          <h1>Included with your free account:</h1>
          <span>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
            One free search every week
          </span>
          <span>
            <div><i class="fa-regular fa-clock"></i></div>
            Real-Time Results
          </span>
          <span>
            <div><i class="fa-solid fa-book"></i></div>
            Two additional categories 
          </span>
          <span>
            <div><i class="fa-regular fa-comment-dots"></i></div>
            24/7 support by phone, email & chat
          </span>
          {/*FIXME - Apply Privacy Policy and Terms of service when created  */}
          <p>By using our application,
             you agree to our <a>Privacy Policy</a> and <a>Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage