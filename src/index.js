import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  Link
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/myapps' element={<Navigate replace to="/learn"/>}/>
      <Route path='/learn' element={<Learn/>}>
        <Route path='/course' element={<Courses/>}/>
      </Route>
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
      <Link className="btn btn-success" to="/learn/course">courses</Link> |
      <Link className="btn btn-primary" to="/learn/bundle">bundle</Link>
    </div>
  )
}

function Courses(){
  return(
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>
    </div>
  )
}
function Bundles(){
  return(
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </div>
  )
}

reportWebVitals();
