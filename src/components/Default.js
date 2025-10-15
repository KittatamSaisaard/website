import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
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
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import profile_logo from "../images/profile_pic.png";
// import ks_loading_once from "../images/ks-loading-once.gif";
import TypeIt from "typeit-react";
import Particles from "react-tsparticles";
// import FadeIn from 'react-fade-in';

const drawerWidth = 150;
const navItems = ['🏠 Home', '👤 About', /*'Education',*/ '🛠️ Projects' /*'Experience',*/, '✉️ Contact'];

  // let navigate = useNavigate(); 
  const handleNavigatePage = (path) => {
    // if (path !== 'Home'){
    //   navigate("../#" + path.toLowerCase(), { replace: true });
    // } else {
    //   navigate("../", { replace: true });
    //   window.scrollTo(0, 0);
    // }

    if(path === "Home"){
      document.location.href="/";
      window.scrollTo(0, 0);
    }
};

const Copyright = () => {
  return (
    <Typography sx={{color:'white', fontSize: {xs: 17, md: 22}}}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'. Made by '}
      <Link color='#FFFFFF' sx={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => handleNavigatePage("Home")}>Kittatam Saisaard</Link>
    </Typography>
  );
}

export default function Default(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }} onClick={() => navigate("../", { replace: true })}>
        Kittatam Saisaard
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          item.substring(3) !== 'Home' ?
          <ListItem key={item === '🛠️ Projects' ? item.substring(4) : item.substring(3)} component="a" className="drawerItem" href={item === '🛠️ Projects' ? "#"+item.substring(4).toLowerCase() : "#"+item.substring(3).toLowerCase()} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} primaryTypographyProps={{fontSize: 21}} class='test'/*onClick={() => handleNavigatePage(item)}*//>
            </ListItemButton>
            <Divider sx={{ borderBottomWidth: 10 }}/>
          </ListItem>
          :
          <ListItem key={item.substring(3)} component="a" className="drawerItem" disablePadding>
            <ListItemButton>
              <ListItemText primary={item} primaryTypographyProps={{fontSize: 21}} onClick={() => handleNavigatePage("Home")}/>
            </ListItemButton>
            <Divider sx={{ borderBottomWidth: 10 }}/>
          </ListItem>
          
        ))}
      </List>
    </Box>
  );

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    // const loading_time = 1660 + 250;
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, loading_time);
  }, []);

  return (
    <Box className="Home" id="home">
      {/* {loading ? (
        <img src={ks_loading_once} className="ks-loading" alt="ks-loading" />
      ) : ( */}
        <React.Fragment>
        {/* <FadeIn transitionDuration={2000} delay={250}> */}
        <AppBar component="nav" style={{ background: '#414245', padding: '0'}}
          sx=
          {{
            height: {md: '5.75em', xs:'4em'},
            display: 'flex',
            justifyContent: 'center'
          }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box component="img" src={ks_logo} sx={{mr : {md: 2.5}, width: {md: '6em', xs: '4em'}}} className="KS_Logo" alt="KS_Logo" onClick={() => handleNavigatePage("Home")}/>
          <Typography
            variant="h6"
            component="div"
            sx={{fontSize: {xs:'1.65rem', sm:40}, flexGrow: 1, textAlign: { xs: 'center', md: 'left' }, "&:hover" : {cursor: "pointer"}}}
            onClick={() => handleNavigatePage("Home")}
          >
            Kittatam Saisaard
          </Typography>
          <Box sx={{mr: 4, display: { xs: 'none', md: 'block' }}}>
            {navItems.map((item) => (
              item.substring(3) === 'Home' ?
                <Button key={item.substring(3)} sx={{ color: '#fff', fontSize: 20, px: {xl:3, md:1} }} href={"/"}/*onClick={() => handleNavigatePage("Home")}*/>
                  {item.substring(3)}
                </Button>
              :
                <Button key={item === '🛠️ Projects' ? item.substring(4) : item.substring(3)} sx={{color: '#fff', fontSize: 20, px: {xl:3, md:1} }} href={item === '🛠️ Projects' ? "#"+item.substring(4).toLowerCase() : "#"+item.substring(3).toLowerCase()}>
                  {item === '🛠️ Projects' ? item.substring(4) : item.substring(3)}
                </Button>
            ))}
          </Box>
          <IconButton
            id="toolBarIcon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ml: 0, mr: 3, display: { md: 'none' }}}
          >
            <MenuIcon sx={{fontSize: 60}}/>
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
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
          <Box component="header" className="Home-header" sx={{mt: {xl: 12, xs: 0}, pb:5 ,position: 'relative', overflow: 'hidden'}}>
            <Particles
              className="particles"
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
            <Box className="Typeit" sx={{fontSize: {xs: 15, sm: 20, md: 25, xl: 50}, pl: 2, mt: {xs:10}}}>
              <Typography sx={{fontSize: {xs: 30, sm: 50, md: 80, xl: 135,}, minWidth: '450px'}}>
                Hi, I'm <b>Kit</b>
              </Typography>
                <TypeIt
                  className="Typical"
                  options={{ cursorChar: "|", loop: true }}
                  getBeforeInit={(instance) => {
                    instance
                      .pause(750)
                      .type("A <b>Computer Science</b> Graduate 💻", {
                        speed: 50,
                        lifeLike: true,
                      })
                      .pause(750)
                      .delete(1)
                      .pause(200)
                      .type("with a Major in <b>Artifical Intelligence</b> 🤖", {
                        speed: 40,
                        lifeLike: true,
                      })
                      .pause(750)
                      .delete(1, { deleteSpeed: 15, lifeLike: true })
                      .pause(200)
                      .type("from The <b>University of Adelaide</b> 🏫", {
                        speed: 40,
                        lifeLike: true,
                      })
                      .pause(1000)
                      .delete(98, { deleteSpeed: 5, lifeLike: true })
                      .pause(200)
                      .type("<b>Software Engineer</b> 💻", {
                        speed: 40,
                        lifeLike: true,
                      })
                      .pause(750)
                      .delete(20, { deleteSpeed: 15, lifeLike: true })
                      .pause(200)
                      .type("<b>Volunteer</b> 🤚", { speed: 40 })
                      .pause(750)
                      .delete(11, { deleteSpeed: 15, lifeLike: true })
                      .pause(200)
                      // .type("<b>Night Fill Assistant</b> 🛒", { speed: 40, lifeLike: true })
                      // .pause(2500).delete(22, { deleteSpeed: 15 }).pause(400)
                      .type("<b>Speedcuber</b> 🧩", { speed: 40, lifeLike: true })
                      .pause(750)
                      .delete(null, { deleteSpeed: 15 })
                      .pause(200);

                    return instance;
                  }}
                />
            </Box>
            <Box
              component="img"
              alt="logo"
              src={profile_logo}
              className="Profile-logo"
              sx={{maxWidth: {xs:400, sm:500, md:400, lg: 1000}, ml: {xs:5}, mt: {xs: 14, xl: 3}, mr: {xs: 2, xl: 0}}}
            />
          </Box>
          <Container maxWidth={false} style={{ padding: '0'}}>
            <Box component="main">
              <About/>
              <Projects/>
              <Contact />
            </Box>
            { (props.page !== 'NA') ?
              <Toolbar sx={{ 
                top: 'auto', 
                bottom: 0, 
                height: 100, 
                background: '#414245', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <Copyright/>
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
