import React, { useEffect } from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";
import Typography from '@mui/material/Typography';

export default function About() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f7f7f7', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Typography variant="h1" gutterBottom>About me</Typography>
      <Box component="div" className='about' sx={{backgroundColor: '#fff'}}>
          <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: 20, textAlign: 'center' }}>
          As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
          <br></br><br></br>
          When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
          </Typography>
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
