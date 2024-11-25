import React, { useEffect } from 'react';
import '../css/Contact.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Card, CardContent} from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

export default function Contact() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="contact" sx={{py: 15, textAlign: 'center'}}> 
     <Typography variant="h1" gutterBottom>Contact Me</Typography>
     <Typography variant="body1" color="textSecondary" component="p" align="center" gutterBottom sx={{ marginBottom: 2}}>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </Typography> 
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          {/* <Typography gutterBottom variant="h5">
            Contact Me
        </Typography>  */}
          {/* <form name="contact" method="post">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="name" type="text" placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="message" label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form> */}
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Box>
  );
}
