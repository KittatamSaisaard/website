import React from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";
import Typography from '@mui/material/Typography';

export default function About() {

  return (
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f2f2f2', pt: 15, px: {lg: 20, xs: 0}, pb: 6}}>
      <Typography sx={{ typography: {xs: 'h2', lg: 'h1'}}} gutterBottom>About Me</Typography>
      <Box component="div" className='about' sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}}}>
          <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', m: 5}}>
          As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
          <br></br><br></br>
          When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
          </Typography>
      </Box>
      <Box sx={{backgroundColor: '#f7f7f7', p: {xs: 1, xl: 2}, pb: {xs: 5}, pt: {xs: 1}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, alignItems: 'center', mx: {xs: 2, xl: 0}}}>
            <Typography color="primary" sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}, m: {xs: 2, xl: '65px'}}}>Connect with me on LinkedIn</Typography>
            <Box component="img" border="0" src={linkedIn_logo} alt="LinkedIn Logo" onClick = {() => window.open('https://www.linkedin.com/in/kittatam-saisaard/', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
