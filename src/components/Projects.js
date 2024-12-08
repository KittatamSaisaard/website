import React from 'react';
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
import Markdown from 'react-markdown';
import Divider from '@mui/material/Divider';


const swift = '[![Swift](https://img.shields.io/badge/Swift-F54A2A?logo=swift&logoColor=white)](https://developer.apple.com/swift/)';
const html = '[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)'
const css = '[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](https://developer.mozilla.org/en-US/docs/Web/CSS)';
const javascript = '[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)';
const react = '[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)';
const npm = '[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](https://www.npmjs.com/)';
const sass = '[![Sass](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff)](https://sass-lang.com/)';
const mui = '[![Material](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)';
const cSharp = '[![C#](https://custom-icon-badges.demolab.com/badge/C%23-%23239120.svg?logo=cshrp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)';
const unity = '[![Unity](https://img.shields.io/badge/Unity-%23000000.svg?logo=unity&logoColor=white)](https://unity.com/)';

const projectItems = [
{
  "image": lights_out_game_pic, "title": "Lights Out", "github": "https://github.com/KittatamSaisaard/Lights-Out",
  "description": "Lights Out Mobile Game made using Unity 3D and C#.\n" +
          "To win the game, the user must turn all of the lights off by having all tiles be white.\n" +
          "When a user taps on a tile, the current and adjacent tiles (top, left, bottom, right) will turn off or on based on the current state the current tile is in. For example, if the current tile is on and a user taps on it, the current and adjacent tiles will turn off.",
  "techUsed": [unity, cSharp]
}
,
{
  "image": earnings_calculator_pic, "title": "Earnings Calculator", "github": "https://github.com/KittatamSaisaard/Earnings-Calculator",
  "description": "Calculate estimated earnings for the week using the rostered hours for the retail industry. The retail industry in Australia has a different hourly pay rate after 6 pm on weekdays, which the calculator takes into consideration.",
  "techUsed": [swift, html, css, javascript]
},
{
  "image": budget_calendar_pic, "title": "Budget Calendar", "github": "https://github.com/KittatamSaisaard/budget-calendar",
  "description": "A calendar to show when bills need to be paid. This new website allows users to create or track their budget by entering income/expenses directly into a monthly calendar. The amounts entered are totaled at the bottom each day.",
  "techUsed": [react, html, css, sass, javascript, mui, npm]
}];

const LinkRenderer = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const ImageRenderer = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: 'auto', height: '1.25em' }} // Adjust size here
  />
);

export default function Projects() {

  return (
    <Box component="section" id="projects" sx={{backgroundColor: '#cccccc', p: 5, pt: {xs: 10, md: 15}, px: {lg: '15vw', xs: '0'}}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{mb: 1.5, typography: {xs: 'h2', lg: 'h1'}}}>Projects</Typography>
        <Divider sx={{height: '5px', background: '#226E93', width: '3rem', borderRadius: '5px', opacity: 1, my: 2, mb: 3}}/>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20}, textAlign: 'center', mb: {xs: 5, md:10}, px: 4}}>
        Here you can explore a selection of personal projects I've developed, each featuring a GitHub repository and a list of the technologies used.
        </Typography>
      </Box>
      {projectItems.map((project) => (
        <Card sx={{display: {md: 'block', xl: 'flex'}, flexDirection: 'row', m: 2, mb: {sx: 4, md: 8}}}>
          <CardActionArea href={project.github} sx={{display: 'flex', justifyContent: 'center'}}target="_blank">
            <CardMedia
              component="img"
              sx={{
                margin: 0, 
                height: '100%'
              }}
              image={project.image}
              title={project.title}
            />
          </CardActionArea>
          <CardContent sx={{width: {xs: '95%', xl: '55%'}, display: {md: 'flex', xl: 'block'}, flexDirection: 'column',}}>
            <Typography gutterBottom variant="h5"s component="div" sx={{fontSize: 40}}>
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: {xs: 15, md: 20} }}>
            {project.description}
            </Typography>
            <CardActions sx={{ paddingLeft: 0, marginTop: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button size="small" variant="contained" href={project.github} target="_blank"     sx={{
                fontSize: 15,
                width: 70,
                height: 35,
                padding: '8px 16px',
                textAlign: 'center',
              }}>
                Github
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '7px',
                  maxWidth: '300px',
                  justifyContent: 'flex-end',
                }}
              >
                {project.techUsed?.map((tech, index) => (
                  <Markdown key={index} components={{ a: LinkRenderer, img: ImageRenderer, 
                    p: ({ node, ...props }) => (
                      <Typography component="span" sx={{ m: 0, p: 0 }}>
                        {props.children}
                      </Typography>
                    )
                  }}>
                    {tech}
                  </Markdown>
                ))}
              </Box>
            </CardActions>
          </CardContent>
        </Card>))}

      <Box sx={{backgroundColor: '#fff', borderRadius: 1.5, p: {xs: 2, xl: 0}, textAlign: 'center', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', m: 2}}>
            <Typography color="primary" sx={{m: {xs: 2, xl: '65px'}, ml: 0 , typography: {xs: 'h5', sm: 'h4', md: 'h3'}}}>Check out more projects on GitHub!</Typography>
            <Box component="img" border="0" src={github_logo} alt="GitHub Logo" onClick = {() => window.open('https://github.com/KittatamSaisaard', '_blank')} sx={{mr: {md: 7}, cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
}
