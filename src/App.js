import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPagePointer';
import MemberPage from './pages/MemberPagePointer';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
{/*FIXME - Ensure that you can't access member page without having an account(focus on this when creating back end)*/}
        <Route path='/member' element={<MemberPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
