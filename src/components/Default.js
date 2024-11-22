import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ks_logo from '../images/ks_logo.png';
import '../css/Home.css';
import '../css/About.css';
import '../css/Education.css';
import '../css/Experience.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './Home';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

import About from './About';
import Experience from './Experience';
import Education from './Education';
import NotFound from './NotFound';
import Projects from './Projects';
import Contact from './Contact';

import profile_logo from "../images/profile_pic.png";
import linkedIn_logo from "../images/linkedIn_logo.png";
import github_logo from "../images/github_logo.png";
import ks_loading_once from "../images/ks-loading-once.gif";
import TypeIt from "typeit-react";
import Particles from "react-tsparticles";
import FadeIn from "react-fade-in";

const drawerWidth = 400;
const navItems = ['Home', 'About', /*'Education',*/ 'Projects' /*'Experience',*/, 'Contact'];

const Copyright = () => {
  return (
    <Typography sx={{color:'white', fontSize: 30}}>
      {'Copyright © Kittatam Saisaard '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Default(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  let navigate = useNavigate(); 
  const handleNavigatePage = (path) => {
      if (path !== 'Home'){
        navigate("../#" + path.toLowerCase(), { replace: true });
      } else {
        navigate("../", { replace: true });
        window.scrollTo(0, 0);
      }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }} onClick={() => navigate("../", { replace: true })}>
        Kittatam Saisaard
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          item !== 'Home' ?
          <ListItem key={item} component="a" class="drawerItem" href={"#"+item.toLowerCase()} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} primaryTypographyProps={{fontSize: 70}} class='test'/*onClick={() => handleNavigatePage(item)}*//>
            </ListItemButton>
            <Divider sx={{ borderBottomWidth: 10 }}/>
          </ListItem>
          :
          <ListItem key={item} component="a" class="drawerItem" disablePadding>
            <ListItemButton>
              <ListItemText primary={item} primaryTypographyProps={{fontSize: 70}} onClick={() => handleNavigatePage("Home")}/>
            </ListItemButton>
            <Divider sx={{ borderBottomWidth: 10 }}/>
          </ListItem>
          
        ))}
      </List>
    </Box>
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    const loading_time = 1660 + 250;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loading_time);
  }, []);

  return (
    <Box className="Home" id="home">
      {/* {loading ? (
        <img src={ks_loading_once} className="ks-loading" alt="ks-loading" />
      ) : ( */}
        <React.Fragment>
        {/* <FadeIn transitionDuration={2000} delay={250}> */}
        <AppBar component="nav" style={{ background: '#414245', height: '5.75em', padding: '0'}}>
        <Toolbar>
          <Box component="img" src={ks_logo} class="KS_Logo" alt="KS_Logo" onClick={() => handleNavigatePage("Home")}/>
          <Typography
            variant="h6"
            component="div"
            sx={{fontSize: 35, flexGrow: { xs: '1', sm: '1' }, textAlign: { xs: 'center', sm: 'left' }, "&:hover" : {cursor: "pointer"}}}
            onClick={() => handleNavigatePage("Home")}
          >
            Kittatam Saisaard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            {navItems.map((item) => (
              item !== 'Home' ?
                <Button key={item} sx={{color: '#fff', fontSize: 20, px: 3, }} href={"#"+item.toLowerCase()} /*onClick={() => handleNavigatePage(item)}*/>
                  {item}
                </Button>
              :
                <Button key={item} sx={{ color: '#fff', fontSize: 20, px: 3 }} onClick={() => handleNavigatePage("Home")}>
                  {item}
                </Button>
            ))}
          </Box>
          <IconButton
            id="toolBarIcon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, m: 1}}
          >
            <MenuIcon sx={{fontSize: 70}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
          <header className="Home-header">
            <Particles
              className="particles"
              style={{ 'padding-bottom': '5'}}
              params={{
                fpsLimit: 30,
                background: {
                  color: {
                    value: "transparent",
                  },
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover",
                },
                fullScreen: {
                  enable: false
                },
                particles: {
                  number: {
                    value: 5,
                    density: {
                      enable: true,
                      value_area: 50,
                    },
                  },
                  color: {
                    value: "#4ca7d4",
                  },
                  links: {
                    distance: 150,
                    enable: true,
                    color: {
                      value: "#e6e6e6",
                    },
                  },
                  move: {
                    enable: true,
                  },
                  size: {
                    value: 2,
                  },
                },
                interactivity: {
                  events: {
                    // "onClick": {
                    //   "enable": true,
                    //   "mode": "push"
                    // },
                    onHover: {
                      enable: true,
                      mode: "grab",
                      parallax: {
                        enable: true,
                        force: 60,
                      },
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    grab: {
                      distance: 400,
                    },
                  },
                },
              }}
            />
            <div className="Typeit">
              <TypeIt
                className="Typical"
                options={{ cursorChar: "|", loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .pause(1500)
                    .type("Hi, I'm <b>KitKat</b>", {
                      speed: 100,
                      lifeLike: true,
                    })
                    .pause(200)
                    .delete(3, { deleteSpeed: 15, lifeLike: true })
                    .type(".", { speed: 40, lifeLike: true })
                    .pause(2000)
                    .delete(1)
                    .pause(200)
                    .type(", a <b>Computer Science</b> Graduate 💻", {
                      speed: 50,
                      lifeLike: true,
                    })
                    .pause(1500)
                    .delete(1)
                    .pause(200)
                    .type("with a Major in <b>Artifical Intelligence</b> 🤖", {
                      speed: 40,
                      lifeLike: true,
                    })
                    .pause(2500)
                    .delete(1, { deleteSpeed: 15, lifeLike: true })
                    .pause(200)
                    .type("from The <b>University of Adelaide</b> 🏫", {
                      speed: 40,
                      lifeLike: true,
                    })
                    .pause(2500)
                    .delete(98, { deleteSpeed: 5, lifeLike: true })
                    .pause(200)
                    .type("<b>Software Developer</b> 💻", {
                      speed: 40,
                      lifeLike: true,
                    })
                    .pause(2500)
                    .delete(20, { deleteSpeed: 15, lifeLike: true })
                    .pause(200)
                    .type("<b>Volunteer</b> 🙋", { speed: 40 })
                    .pause(2500)
                    .delete(11, { deleteSpeed: 15, lifeLike: true })
                    .pause(200)
                    // .type("<b>Night Fill Assistant</b> 🛒", { speed: 40, lifeLike: true })
                    // .pause(2500).delete(22, { deleteSpeed: 15 }).pause(400)
                    .type("<b>Gym Junkie</b> 💪", { speed: 40, lifeLike: true })
                    .pause(2500)
                    .delete(null, { deleteSpeed: 15 })
                    .pause(200);

                  return instance;
                }}
              />
            </div>
            <Box
              component="img"
              alt="logo"
              src={profile_logo}
              className="Profile-logo"
              sx={{mt: 8, ml: {xs: 45, xl: 30}}}
            />
          </header>
          {/* <hr /> */}
          {/* <body className="Home-body">
                <div className="LinkedIn">
                    <p>
                    Connect with me on LinkedIn
                    </p>
                    <a href="https://www.linkedin.com/in/kittatam-saisaard/" target="react/jsx-no-target-blank">
                    <img border="0" src={linkedIn_logo} className="LinkedIn-logo" alt="LinkedIn Logo" />
                    </a>
                </div>
                <div className="GitHub">
                    <p>
                    Follow me on GitHub
                    </p>
                    <a href="https://github.com/KittatamSaisaard" target="react/jsx-no-target-blank">
                    <img border="0" src={github_logo} className="GitHub-logo" alt="GitHub Logo" />
                    </a>
                </div>
                </body> */}
          {/* <About/>
                <Experience/>
                <Education/> */}
          <Container maxWidth={false} style={{ padding: '0'}}>
            <Box component="main"/*sx={{ p: props.page === undefined ? 3 : 0}}*/>
              <About/>
              <Projects/>
              <Contact />
              {/* {
              props.page ==="education"
              ? <Education/> 
              : props.page ==="about"
              ? <About id='about'/>
              : props.page ==="experience"
              ? <Experience/>
              : props.page ==="projects"
              ? <Projects/>
              : props.page ==="404"
              ? <NotFound/>
              : null//<Home/>
              } */}
            </Box>
            { (props.page !== 'NA') ?
              <Toolbar  sx={{ 
                top: 'auto', 
                bottom: 0, 
                height: 100, 
                background: '#414245', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <Copyright  />
                {/* <Box sx={{ flexGrow: 1 }} /> */}
                {/* <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <MoreIcon />
                </IconButton> */}
              </Toolbar>
              : null
            }
          </Container>
        {/* </FadeIn> */}
        </React.Fragment>
      {/* )} */}
    </Box>
    
  );
}
