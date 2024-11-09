import React, {useEffect} from 'react';
import '../css/Projects.css';
import github_logo from "../images/github_logo.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lights_out_game_pic from "../images/lights_out_game.png";
import earnings_calculator_pic from "../images/earnings_calculator.png";
import budget_calendar_pic from "../images/budget_calendar.png";

export default function Projects() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <h1>Projects</h1>
      <Card sx={{ maxWidth: 690 }}>
        <CardActionArea href="https://github.com/KittatamSaisaard/Lights-Out" target="_blank">
          <CardMedia
          component="img"
            sx={{margin: 0, height: 372, width: 690 }}
            image={lights_out_game_pic}
            title="Lights Out"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5"s component="div">
            Lights Out
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lights Out Mobile Game made using Unity 3D and C#.
          To win the game, the user must turn all of the lights off by having all tiles be white.
          When a user taps on a tile, the current and adjacent tiles (top, left, bottom, right) will turn off or on based on the current state the current tile is in. For example, if the current tile is on and a user taps on it, the current and adjacent tiles will turn off.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://github.com/KittatamSaisaard/Lights-Out" target="_blank">Github</Button>
        </CardActions>
      </Card>
      <br /><br />
      <Card sx={{ maxWidth: 690 }}>
        <CardActionArea href="https://github.com/KittatamSaisaard/Earnings-Calculator" target="_blank">
          <CardMedia
            component="img"
            sx={{margin: 0, height: 372, width: 690}}
            image={earnings_calculator_pic}
            title="Earnings Calculator"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Earnings Calculator
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Calculate estimated earnings for the week using the rostered hours for the retail industry. The retail industry in Australia has a different hourly pay rate after 6 pm on weekdays, which the calculator takes into consideration.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" href="https://github.com/KittatamSaisaard/Earnings-Calculator" target="_blank">Github</Button>
        </CardActions>
      </Card>
      <br /><br />
      <Card sx={{ maxWidth: 690 }}>
        <CardActionArea href="https://github.com/KittatamSaisaard/budget-calendar" target="_blank">
          <CardMedia
            component="img"
            sx={{margin: 0, height: 372, width: 690}}
            image={budget_calendar_pic}
            title="Budget Calender"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Budget Calender
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A calendar to show when bills need to be paid. This new website allows users to create or track their budget by entering income/expenses directly into a monthly calendar. The amounts entered are totaled at the bottom each day.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://github.com/KittatamSaisaard/budget-calendar" target="_blank">Github</Button>
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
