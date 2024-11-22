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
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f7f7f7', p: 5, pt: 15, px: {lg: 20, xs: 0}, mt: 15}}>
      <Typography variant="h1" gutterBottom>About Me</Typography>
      <Box component="div" className='about' sx={{backgroundColor: '#fff', m: {lg: 0, xs: 10}}}>
          <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: 20, textAlign: 'center', m: 5}}>
          As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
          <br></br><br></br>
          When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
          </Typography>
      </Box>
      <Box sx={{backgroundColor: '#fff', p: {xs: 1, xl: 2}, pb: {xs: 5}, pt: {xs: 1}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, justifyContent: 'center', ml: {xs: 10, xl: 0}, mr: {xs: 10, xl: 0}, mt: 15, mb: 10}}>
            <Typography color="primary" variant="h3" sx={{m: {xs: 2, xl: '65px'}}}>Connect with me on LinkedIn</Typography>
            <Box component="img" border="0" src={linkedIn_logo} alt="LinkedIn Logo" onClick = {() => window.open('https://www.linkedin.com/in/kittatam-saisaard/', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
