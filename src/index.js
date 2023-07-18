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
      <Route path='/' element={<Home/>}/>
      <Route path='/myapps' element={<Home/>}/>
      <Route path='/learn' element={<Learn/>}/>
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
function Learn(){
  return(
    <div>
      <h1>Learn</h1>
      <h4>
        All courses are listed here
      </h4>
    </div>
  )
}

reportWebVitals();
