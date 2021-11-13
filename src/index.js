import React from 'react';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/index.css';
import Home from './components/Home';
import NotFound from './components/NotFound'

const rootElement = document.getElementById("root");
render(
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </HashRouter>,
  rootElement
);
