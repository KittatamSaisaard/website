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

  const handleSubmit = event => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => alert("Thank you for your submission. Your information has been recieved and I will try to get back to you as soon as possible!"), myForm.reset())
      .catch(error => alert(error));
  };

  return (
    <Box component="section" id="contact" sx={{my: 12, textAlign: 'center'}}> 
     <Typography variant="h1" gutterBottom>Contact Me</Typography>
     <Typography variant="h5" color="textSecondary" component="p" align="center" gutterBottom sx={{ marginBottom: 10, mx: {lg: 0, xs: 20}}}>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </Typography> 
    <Grid sx={{px: {lg: 45, xs: 10}}}>
      <Card style={{padding: "0 5px 0 5px", margin: "0 auto" }}>
        <CardContent>
          <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="name" type="text" placeholder="Enter name" label="Name" variant="outlined" fullWidth required inputProps={{maxLength: 100}}/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required inputProps={{maxLength: 100}}/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="message" label="Message" multiline rows={8} placeholder="Type your message here" variant="outlined" fullWidth required inputProps={{maxLength: 1000}}/>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{fontSize: {xl: 20, xs: 60}}}>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Box>
  );
}
