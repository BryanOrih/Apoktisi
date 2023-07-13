import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
//NOTE - May need to switch name to seperate landing page context and member page context
import PrimaryContextProvider from './Context/LandPageContext/PrimaryContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <PrimaryContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PrimaryContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
