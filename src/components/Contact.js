import React, { useEffect } from 'react';
import '../css/About.css';
import Box from '@mui/material/Box';

export default function Contact() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="contact" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Box component="div" className='contact' sx={{backgroundColor: '#fff'}}>
      <h1>Contact</h1>
      <span style={{ textAlign: 'center' }}>
        <span h1 style={{color: '#396980'}}>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </span>
      </span>
      </Box>
      <br></br>
      <Box component="div" className='contact' sx={{backgroundColor: '#fff'}}>

      </Box>
    </Box>
  );
}
