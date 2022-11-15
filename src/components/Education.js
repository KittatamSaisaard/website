import React from 'react';
import '../css/Education.css';

const Images = [
  {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/University-of-Adelaide-Logo.svg/440px-University-of-Adelaide-Logo.svg.png',
  alt: 'The Unversity of Adelaide',
  qualification: 'Bachelor of Computer Science, Artifical Intelligence',
  duration: 'Mar 2019 - Present',
  description: 'Currently in my final year, majoring in Artificial Intelligence. So far from my degree, the main concepts and experience I have gained have been in programming, including web development and algorithms and data structures. I have also undertaken several finance and economics courses to compliment my interest in long term investing.'},
  {url: 'https://humanpsychology.com.au/wp-content/uploads/2016/10/unisa-logo.png',
  alt: 'The University of South Australia',
  qualification: 'Mobile Application Enterprise Development',
  duration: 'Jul 2020 - Nov 2020',
  description: 'From undertaking this course, I’ve gained technical knowledge and specialised software development skills for developing mobile applications on Apple\'s operating systems such as iOS. The course introduced the Swift programming language alongside with Xcode.'},
  {url: 'https://playford.sa.edu.au/wp-content/themes/PlayFord/images/playford-logo.png',
  alt: 'Playford International College',
  qualification: 'The South Australian Certificate of Education (SACE)',
  duration: 'Feb 2015 - Nov 2018',
  description: 'Senior School Dux (Year 11 & 12), Barnes House Captain (Year 12, 2018) \n\nNotable SACE subject completions: \n• Specialist Mathematics \n• Mathematical Methods \n• Physics'},
  {url: 'https://aie.edu.au/wp-content/uploads/2018/07/aie-logo-dark.jpg',
  alt: 'The Academy of Interactive Entertainment',
  qualification: 'Certificate III in Information, Digital Media and Technology',
  duration: 'Feb 2017 - Nov 2017',
  description: 'I undertook this Vocational Education and Training (VET) course during year 11. The course has provided me with the knowledge to create 3D games using the Unity 3D game engine. The course introduced the industry-standard tools and techniques for game development. \n\nThe course is also known as, "Game Development Foundations".'},
  {url: 'https://defencesa.com/wp-content/uploads/2020/12/TAFE-SA-GOSA-Stacked-RGB.png',
  alt: 'TAFE SA',
  qualification: 'Defence Industry Pathways Program',
  duration: 'Feb 2016 - Apr 2016',
  description: 'The Defence Industry Pathways Program (DIPP) has a focus on advanced manufacturing and design and developing high-level employability skills for young people seeking to enter the defence industry. \n\nI had the privilege to participate in the 9th iteration of the program. From the completion of this program, I\'ve gained an insight into the defence industry as well as moderate computer-aided design competency.'}
];

const Education = () => {
  const images = []

  Images.forEach(image => {
    images.push(
      <div id="outmost_idiv_education">
        <div className="idiv_education">
          <img src={`${image.url}`} alt={`${image.alt}`}/>
          <div className="idiv_description">
            <h1>{`${image.alt}`}</h1>
            <h2>{`${image.qualification}`}</h2>
            <h3>{`${image.duration}`}</h3>
            <p className="display-linebreak">{`${image.description}`}</p>
          </div>        
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="education">
      <h1 id="sectionNames">Education</h1>
      <div>
        {images}
      </div>
    </div>
  )
};

export default Education;