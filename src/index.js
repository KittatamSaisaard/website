import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/index.css';
import ReactDOM from 'react-dom'
import Home from './components/Home';
import Education from './components/Education';
import NotFound from './components/NotFound';
// import REC from './components/Retail-Earnings-Calculator';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);