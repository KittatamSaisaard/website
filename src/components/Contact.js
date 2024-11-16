import React, { useEffect } from 'react';
import '../css/Contact.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Card, CardContent} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    // <Box component="section" id="contact" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
    //   <Box component="div" className='contact' sx={{backgroundColor: '#fff'}}>
    //   <h1>Contact</h1>
    //   <span style={{ textAlign: 'center' }}>
    //     <span h1 style={{color: '#396980'}}>
    //       Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
    //     </span>
    //   </span>
    //   </Box>
    //   <br></br>
    //   <Box component="div" className='contact' sx={{backgroundColor: '#fff'}}>

    //   </Box>
    // </Box>
    <div className="App"> 
    <Typography gutterBottom variant="h3" align="center">
      Contact Me
     </Typography>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          {/* <Typography gutterBottom variant="h5">
            Contact Me
        </Typography>  */}
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Fill up the form and our team will get back to you within 24 hours.
        </Typography> 
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </div>
  );
}
