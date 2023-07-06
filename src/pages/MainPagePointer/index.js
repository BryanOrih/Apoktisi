import React from 'react'
import "./index.css"
import MainPageNav from '../../Components/MainPage/MainPageNav'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import LandingPage from '../MainPageRoutes/LandingPage';
import MainPageFooter from '../../Components/MainPage/MainPageFooter';
const MainPage = () => {
  return (
    <div className='MainPage'>
      <MainPageNav/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <MainPageFooter/>
    </div>
  )
}

export default MainPage