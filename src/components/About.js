import React from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";
import Typography from '@mui/material/Typography';
//import Divider from '@mui/material/Divider';

export default function About() {

  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'MUI', 'C#', 'SQL', 'Unity', 'Swift', 'Python', 'C++', 'Terminal', 'OOP & ODD', 'Responsive Design', 'Mobile Development'];

  return (
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f2f2f2', pt: 15, px: {lg: 20, xs: 0}, pb: 6}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{ typography: {xs: 'h2', lg: 'h1'}}}>About Me</Typography>
        <Divider sx={{height: '5px', background: '#226E93', width: '3rem', borderRadius: '5px', opacity: 1, my: 2}}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'stretch', justifyContent: 'center', gap: {xs: 2.5, md: 0, lg: 2.5}}}>
        <Box component="div" className='about' sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}, flex: 1, borderRadius: 5, my: '0 !important'}}>
            <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', m: 5}}>
            As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
            <br></br><br></br>
            When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
            </Typography>
        </Box>
        <Box component="div" 
          sx={{
            backgroundColor: '#f7f7f7', 
            m: {lg: 0, xs: 2}, 
            flex: 1, 
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            my: '0 !important'
          }}
        >
            <Typography sx={{color: '#589ebf', textAlign: 'center', m: 5, fontWeight: 1, fontSize: 35}}>
              My Skills
            </Typography>
            <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '7px',
                    margin: '0 auto',
                    px: 2,
                    pb: 5
                  }}
                >
                {skillsList.map((tech, index) => (
                      <Box 
                        sx={{
                            p: '.35rem .7rem',
                            background: '#99999933',
                            color: '#666',
                            fontWeight: '600',
                            fontSize: '1rem',
                            borderColor: 'grey.300',
                            borderRadius: '5px',
                          
                          }}
                        >
                        {tech}
                      </Box>

                ))}
            </Box>
        </Box>
      </Box>
      <br></br>
      <Box sx={{backgroundColor: '#f7f7f7', borderRadius: 5, p: {xs: 1, xl: 2}, pb: {xs: 5}, pt: {xs: 1}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, alignItems: 'center', m: {lg: 0, xs: 2}}}>
            <Typography color="primary" sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}, m: {xs: 2, xl: '65px'}}}>Connect with me on LinkedIn</Typography>
            <Box component="img" border="0" src={linkedIn_logo} alt="LinkedIn Logo" onClick = {() => window.open('https://www.linkedin.com/in/kittatam-saisaard/', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
