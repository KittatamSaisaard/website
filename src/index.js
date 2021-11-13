import React from 'react';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/index.css';
import ReactDOM from 'react-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import REC from './components/Retail-Earnings-Calculator';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="retail-earnings-calculator" element={<REC/>}/>
        <Route exact path="rec" element={<REC/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);