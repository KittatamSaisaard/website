import React from 'react';
import profile_logo from '../images/profile_pic.png';
import linkedIn_logo from '../images/linkedIn_logo.png';
import '../css/Home.css';
import TypeIt from "typeit-react";
import Particles from "react-tsparticles";


function Home() {
  return (
    <div className="Home">
    <Particles className="particles"
        params={{
          "background": {
            "color": {
              "value": "#f2f2f2"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "fullScreen": {
            "zIndex": 1
          },
          "particles": {
            "color": {
              "value": "#4ca7d4"
            },
            "links": {
              "distance": 150,
              "enable": true,
              "color": {
                "value": "#e6e6e6"
              }
            },
            "move": {
              "enable": true
            },
            "size": {
              "value": 2
            }
          },
          "interactivity": {
            "events": {
              // "onClick": {
              //   "enable": true,
              //   "mode": "push"
              // },
              "onHover": {
                "enable": true,
                "mode": "grab",
                "parallax": {
                  "enable": true,
                  "force": 60
                }
              }
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
              },
              "grab": {
                "distance": 400
              }
            }
          }
        }} />
      <header className="Home-header">
        <div className="Typeit">
          <TypeIt className="Typical" options={{cursorChar: "|", loop: true}}
            getBeforeInit={(instance) => {
              instance
                .type("Hi, I'm <b>Kit</b>.", {speed: 115})
                .pause(2000).delete(1).pause(200).type(", a <b>Computer Science</b> Student 💻", {speed: 50})
                .pause(1500).delete(2).pause(200)
                .type(", Majoring in <b>Artifical Intelligence</b> 🤖", {speed: 40})
                .pause(2500).delete(1, {deleteSpeed: 20}).pause(200)
                .type("at The <b>University of Adelaide</b> 🏫", {speed: 40})
                .pause(2500).delete(95, {deleteSpeed: 15}).pause(200)
                .type(" a <b>Software Developer</b> 💻", {speed: 40})
                .pause(2500).delete(23, {deleteSpeed: 15}).pause(200)
                .type(" a <b>Volunteer</b> ✋", {speed: 40})
                .pause(2500).delete(14, {deleteSpeed: 15}).pause(200)
                .type(" a <b>Night Fill Assistant</b> 🛒", {speed: 40})
                .pause(2500).delete(null, {deleteSpeed: 15}).pause(400)

              return instance;
            }}
          />
        </div>
        <img src={profile_logo} className="Profile-logo" alt="logo" />
      </header>
      <hr/>
      <body className="Home-body">
        <p>
        Connect with me on LinkedIn
        </p>
          <a href="https://www.linkedin.com/in/kittatam-saisaard/" target="react/jsx-no-target-blank">
          <img border="0" src={linkedIn_logo} className="LinkedIn-logo" alt="LinkedIn Logo"/>
        </a>
      </body>
    </div>
  );
}

export default Home;
