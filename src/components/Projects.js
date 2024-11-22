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
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, pt: 10, px: {lg: '15vw', xs: '0'}}}>
      <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>Projects</Typography>
      {projectItems.map((item) => (
        <Card sx={{display: {md: 'block', xl: 'flex'}, flexDirection: 'row', m: 10}}>
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
          <CardContent sx={{width: {xs: '95%', xl: '55%'}, display: {md: 'flex', xl: 'block'}, flexDirection: 'column',}}>
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
        </Card>))}

      <Box sx={{backgroundColor: '#fff', p: {xs: 2, xl: 5}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', xl: 'row'}, justifyContent: 'center', m: 10}}>
            <Typography color="primary" variant="h3" sx={{m: {xs: 2, xl: '65px'}}}>Check out more projects on GitHub!</Typography>
            <Box component="img" border="0" src={github_logo} alt="GitHub Logo" onClick = {() => window.open('https://github.com/KittatamSaisaard', '_blank')} sx={{cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
