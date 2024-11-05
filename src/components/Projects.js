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
import lights_out_game_pic from "../images/lights_out_game.png";

export default function Projects() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <h1>Projects</h1>
      <Card sx={{ maxWidth: 690 }}>
      <CardMedia
        sx={{ height: 372, width: 690 }}
        image={lights_out_game_pic}
        title="Lights Out"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lights Out
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lights Out Mobile Game made using Unity 3D and C#.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <br /><br />
    <Card sx={{ maxWidth: 690 }}>
      <CardMedia
        component="img"
        sx={{margin: 0, width: 690}}
        image={lights_out_game_pic}
        title="Lights Out"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lights Out
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lights Out Mobile Game made using Unity 3D and C#.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
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
