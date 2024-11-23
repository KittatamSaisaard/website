import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/index.css';
import ReactDOM from 'react-dom'
import Default from './components/Default';
// import Education from './components/Education';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import REC from './components/Retail-Earnings-Calculator';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Default/>}/>
        {/* <Route exact path="/education" element={<Default page="education"/>}/>
        <Route exact path="/experience" element={<Default page="experience"/>}/>
        <Route exact path="/projects" element={<Default page="projects"/>}/>
        <Route exact path="/about" element={<Default page="about"/>}/> */}
        {/* <Route exact path="*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);