import React, {useEffect} from 'react';
import '../css/Projects.css';
import github_logo from "../images/github_logo.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Card sx={{ maxWidth: 690 }}>
      <CardMedia
        sx={{ height: 280 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      <Box component="section" id="projects" sx={{backgroundColor: '#d6d6d6', p: 5, px: {lg: '15vw', xs: '0'}}}>
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
    </Box>
  );
}
