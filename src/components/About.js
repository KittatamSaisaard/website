import React, { useEffect } from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";

export default function About() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="about" sx={{backgroundColor: '#f7f7f7', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Box component="div" className='about' sx={{backgroundColor: '#fff'}}>
      <h1>About Me</h1>
      <span id="bio" style={{ textAlign: 'center' }}>
        <span h1 style={{color: '#396980'}}>
          Solving problems and understanding the inner workings of complex mechanisms has always been a habit of mine at a very young age. After feeling accomplished for solving a Rubik's cube for the first time, I quickly became intrigued in solving twisty puzzles as not only a personal hobby, but also competitively. The interest of solving problems later led me to studying a Bachelor of Computer Science at the University of Adelaide, in which I am currently in my third and final year, majoring in Artificial Intelligence. I am enthusiastic with applying my technical knowledge to design and create applications that improves the efficiency of routine tasks at the workplace and at home. Especially at home.
          <br /><br />
          Having a long-term outlook for the future has been more prevalent for me after graduating from high school. Securing a confident and comfortable future financially through long term equity investments and more importantly, interpersonal development, are extracurricular activities that I enjoy, just like chocolate.
          <br /><br />
          My love for problem solving and making lives easier will serve me well to ultimately contributing to solving problems that will advance the world.
        </span>
      </span>
      </Box>
      <br></br>
      <Box component="div" className='about' sx={{backgroundColor: '#fff'}}>
        <div className="LinkedIn">
          <p>Connect with me on LinkedIn</p>
          <a href="https://www.linkedin.com/in/kittatam-saisaard/" target="react/jsx-no-target-blank">
            <img border="0" src={linkedIn_logo} className="LinkedIn-logo" alt="LinkedIn Logo" />
          </a>
        </div>
      </Box>
    </Box>
  );
}
