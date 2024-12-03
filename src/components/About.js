import React from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';
import linkedIn_logo from "../images/linkedIn_logo.png";
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';

export default function About() {

  const LinkRenderer = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  
  const ImageRenderer = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{ width: 'auto', height: '1.25em' }} // Adjust size here
    />
  );

  const swift = '[![Swift](https://img.shields.io/badge/Swift-F54A2A?logo=swift&logoColor=white)](https://developer.apple.com/swift/)';
  const html = '[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)'
  const css = '[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](https://developer.mozilla.org/en-US/docs/Web/CSS)';
  const javascript = '[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)';
  const react = '[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)';
  const sass = '[![Sass](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff)](https://sass-lang.com/)';
  const mui = '[![Material](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)';
  const cSharp = '[![C#](https://custom-icon-badges.demolab.com/badge/C%23-%23239120.svg?logo=cshrp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)';
  const unity = '[![Unity](https://img.shields.io/badge/Unity-%23000000.svg?logo=unity&logoColor=white)](https://unity.com/)';

  const skillsList = [html, css, javascript, react, sass, mui, cSharp, unity, swift];

  return (
    <Box component="section" id="about" sx={{textAlign: 'center', backgroundColor: '#f2f2f2', pt: 15, px: {lg: 20, xs: 0}, pb: 6}}>
      <Typography sx={{ typography: {xs: 'h2', lg: 'h1'}}} gutterBottom>About Me</Typography>
      <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, alignItems: 'stretch', justifyContent: 'center', gap: 5}}>
        <Box component="div" className='about' sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}, flex: 1}}>
            <Typography variant="body2" id="bio" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', m: 5}}>
            As a tech enthusiast passionate about solving complex problems, I thrive at the intersection of curiosity and innovation. With experience in software development and emerging technologies, I focus on creating user-centric applications that enhance efficiency and push boundaries. I’m committed to continuous learning, fostering collaboration, and building solutions that make a meaningful impact.
            <br></br><br></br>
            When I’m not coding or brainstorming ideas, you’ll find me solving Rubik’s cubes, exploring new trails, or diving into the latest tech trends. Let’s connect, collaborate and shape the future of technology together!
            </Typography>
        </Box>
        {/* <Box component="div" sx={{backgroundColor: '#f7f7f7', m: {lg: 0, xs: 2}, flex: 1}}>
            <Typography variant="h2" sx={{color: '#589ebf', textAlign: 'center', m: 5}}>
              My Skills:
            </Typography>
            <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '7px',
                    margin: 0,
                    p: 1,
                  }}
                >
                  {skillsList.map((tech, index) => (
                    <Markdown key={index} components={{ a: LinkRenderer, img: ImageRenderer, 
                      p: ({ node, ...props }) => (
                        <Typography component="span" sx={{ m: 0, p: 0 }}>
                          {props.children}
                        </Typography>
                      )
                    }}>
                      {tech}
                    </Markdown>
                  ))}
            </Box>
        </Box> */}
      </Box>
      <br></br>
      <Box sx={{backgroundColor: '#f7f7f7', p: {xs: 1, xl: 2}, pb: {xs: 5}, pt: {xs: 1}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, alignItems: 'center', m: {lg: 0, xs: 2}}}>
            <Typography color="primary" sx={{typography: {xs: 'h5', sm: 'h4', md: 'h3'}, m: {xs: 2, xl: '65px'}}}>Connect with me on LinkedIn</Typography>
            <Box component="img" border="0" src={linkedIn_logo} alt="LinkedIn Logo" onClick = {() => window.open('https://www.linkedin.com/in/kittatam-saisaard/', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
