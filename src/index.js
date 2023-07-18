import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route/>
    </Routes>
  </Router>
    {/* <Home/> */}
  </React.StrictMode>
);

function Home(){
  return(
    <div>
      <h1>Home route</h1>
    </div>
  )
}

reportWebVitals();
