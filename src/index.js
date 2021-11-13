import React from 'react';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/index.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import REC from './components/Retail-Earnings-Calculator';

const rootElement = document.getElementById("root");
render(
  <HashRouter basename='/website'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="retail-earnings-calculator" element={<REC/>}/>
      <Route path="rec" element={<REC/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </HashRouter>,
  rootElement
);
