import React from 'react';
import profile_logo from '../images/profile_pic.png';
import linkedIn_logo from '../images/linkedIn_logo.png';
import '../css/Home.css';
import Typical from 'react-typical'

function Home() {

  const typical_wait_time = 1500;

  return (
    <div className="Home">
      <header className="Home-header">
        <Typical className="Typical"
          steps={[
            'Hi, I\'m Kit', typical_wait_time, 
            'Hi, I\'m Kit, a Computer Science Student 💻', typical_wait_time, 
            'Hi, I\'m Kit, a Computer Science Student, at The University of Adelaide 🏫', typical_wait_time, 
            'Hi, I\'m Kit, a Computer Science Student, Majoring in Artifical Intelligence 🤖', typical_wait_time, 
            'Hi, I\'m Kit, a Software Developer 👨‍💻', typical_wait_time, 
            'Hi, I\'m Kit, a Volunteer 🙋‍♂️', typical_wait_time,
            'Hi, I\'m Kit, a Nightfill Assistant 🛒', typical_wait_time,
            'Hi, I\'m Kit, a Speedcuber 🏆', typical_wait_time,
          ]}
          loop={Infinity}
          wrapper="p"
        />
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
