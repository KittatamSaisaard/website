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
import lights_out_game_pic from "../images/lights_out_game.png";
import earnings_calculator_pic from "../images/earnings_calculator.png";
import budget_calendar_pic from "../images/budget_calendar.png";
import Typography from '@mui/material/Typography';

const projectItems = [
{"image": lights_out_game_pic, "title": "Lights Out", "github": "https://github.com/KittatamSaisaard/Lights-Out",
  "description": "Lights Out Mobile Game made using Unity 3D and C#.\
          To win the game, the user must turn all of the lights off by having all tiles be white.\
          When a user taps on a tile, the current and adjacent tiles (top, left, bottom, right) will turn off or on based on the current state the current tile is in. For example, if the current tile is on and a user taps on it, the current and adjacent tiles will turn off."
}
,
{
  "image": earnings_calculator_pic, "title": "Earnings Calculator", "github": "https://github.com/KittatamSaisaard/Earnings-Calculator",
  "description": "Calculate estimated earnings for the week using the rostered hours for the retail industry. The retail industry in Australia has a different hourly pay rate after 6 pm on weekdays, which the calculator takes into consideration."
},
{
  "image": budget_calendar_pic, "title": "Budget Calender", "github": "https://github.com/KittatamSaisaard/budget-calendar",
  "description": "A calendar to show when bills need to be paid. This new website allows users to create or track their budget by entering income/expenses directly into a monthly calendar. The amounts entered are totaled at the bottom each day."
}];

export default function Projects() {

  return (
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, px: {lg: '15vw', xs: '0'}}}>
      <Typography variant="h1" gutterBottom>Projects</Typography>
      {projectItems.map((item) => (
      <React.Fragment>
        <Card sx={{display: {md: 'block', xl: 'flex'}, flexDirection: 'row', width: {md: '50%', xl: '100%'}, height: {md: '100%', xl: '100%'}}}>
          <CardActionArea href={item.github} sx={{display: 'flex', justifyContent: 'center'}}target="_blank">
            <CardMedia
              component="img"
              sx={{margin: 0, 
                height: item.title === "Earnings Calculator" ? 420 : '100%', width: item.title === "Earnings Calculator" ? 835 : '100%',
              }}
              image={item.image}
              title={item.title}
            />
          </CardActionArea>
          <CardContent sx={{width: '55%', display: {md: 'flex', xl: 'block'}, flexDirection: 'column'}}>
            <Typography gutterBottom variant="h5"s component="div" sx={{fontSize: 40}}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 20 }}>
            {item.description}
            </Typography>
            <CardActions sx={{paddingLeft:0, marginTop: 1}}>
              <Button size="small" variant="contained" href={item.github} target="_blank" sx={{fontSize: 15}}>Github</Button>
            </CardActions>
          </CardContent>
        </Card>
        <br /><br />
      </React.Fragment>))}

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
