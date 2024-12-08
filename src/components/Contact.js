import '../css/Contact.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Card, CardContent} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function Contact() {

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

    // Detect screen size
    const isExtraSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust for xs screen size
    const isExtraLargeScreen = useMediaQuery('(min-width: 1200px)'); // Adjust for xl screen size
  
    // Determine the number of rows based on the screen size
    const rows = isExtraSmallScreen ? 8 : isExtraLargeScreen ? 6 : 6; // Default to 6 rows for other sizes

  return (
    <Box component="section" id="contact" sx={{backgroundColor: '#ebebeb', pb: {xs: 20, lg: 5}, pt: {xs: 10, md: 15}, textAlign: 'center'}}> 
     <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{typography: {xs: 'h2', lg: 'h1'}}}>Contact Me</Typography>
        <Divider sx={{height: '5px', background: '#226E93', width: '3rem', borderRadius: '5px', opacity: 1, my: 2, mb: 3}}/>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', mb: {xs: 5, md:10}, px: 4}}>
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
        </Typography>
      </Box>
     {/* <Typography color="textSecondary" component="p" align="center" gutterBottom sx={{ marginBottom: 10, mx: {lg: 0, xs: 4}, typography: {xs: 'h6', lg: 'h5'}}}>
          
        </Typography>  */}
    <Grid sx={{mx: {lg: 45, xs: 2}}}>
      <Card style={{padding: "0 5px 0 5px", margin: "0 auto" }} sx={{backgroundColor: '#f7f7f7'}}>
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
                <TextField name="message" label="Message" multiline rows={rows} placeholder="Type your message here" variant="outlined" fullWidth required inputProps={{maxLength: 1000}}/>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{fontSize: 20}}>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Box>
  );
}
