import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div className="about">
      <h1 id="sectionNames">About Me</h1>
      <span id="bio" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'calc(5px + 4vw)' }}>Kittatam Saisaard <span style={{ color: '#226e93' }}>(Kit)</span></h1>
        <span h1 style={{ fontSize: 'calc(10px + 1vw)', color: '#396980' }}>
          Solving problems and understanding the inner workings of complex mechanisms has always been a habit of mine at a very young age. After feeling accomplished for solving a Rubik's cube for the first time, I quickly became intrigued in solving twisty puzzles as not only a personal hobby, but also competitively. The interest of solving problems later led me to studying a Bachelor of Computer Science at the University of Adelaide, in which I am currently in my third and final year, majoring in Artificial Intelligence. I am enthusiastic with applying my technical knowledge to design and create applications that improves the efficiency of routine tasks at the workplace and at home. Especially at home.
          <br /><br />
          Having a long-term outlook for the future has been more prevalent for me after graduating from high school. Securing a confident and comfortable future financially through long term equity investments and more importantly, interpersonal development, are extracurricular activities that I enjoy, just like chocolate.
          <br /><br />
          My love for problem solving and making lives easier will serve me well to ultimately contributing to solving problems that will advance the world.
        </span>
      </span>
    </div>
  );
}
