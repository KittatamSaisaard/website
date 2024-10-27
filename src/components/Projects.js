import React, {useEffect} from 'react';
import '../css/Projects.css';
import github_logo from "../images/github_logo.png";
import Box from '@mui/material/Box';

export default function Projects() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" sx={{backgroundColor: '#545454', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Box component="div" sx={{backgroundColor: '#fff'}}>
        <div className="GitHub">
          <p>Check out my projecs on GitHub!</p>
          <a href="https://github.com/KittatamSaisaard" target="react/jsx-no-target-blank">
            <img border="0" src={github_logo} className="GitHub-logo" alt="GitHub Logo" />
          </a>
        </div>
        {/* <div id="soon">
          <h1>More Coming Soon!</h1>
        </div> */}
      </Box>
    </Box>
  );
}
