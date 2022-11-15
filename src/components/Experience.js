import React from 'react';
import '../css/Experience.css';

const Images = [
  {url: 'https://www.spscommerce.com/wp-content/uploads/2020/03/DrakesSupermarkets_logo.png',
  alt: 'Drakes Supermarkets',
  role: 'Night Fill Assistant',
  duration: 'Feb 2018 - Present · 3 yrs 10 mos',
  description: '• Engage along the Nightfill team to ensure adequate stock on the shelves. \n• Ensuring stock is neat and presentable throughout the store (facing). \n• Assisting customers and team members with complaints and enquiries. \n• Working effectively as a team to efficiently complete tasks on time. \n• Work independently on assigned tasks that contributed to the team\'s success. \n• Using intuition to solve issues as they arise unexpectedly.'},
  {url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Kerry_Logistics_LOGO_%28high_res%29_%28transparent%29.png',
  alt: 'Kerry Logistics',
  role: 'Web Developer',
  duration: 'Jan 2021 - Feb 2021 · 2 mos',
  description: 'Contributed to designing and developing a new internal website for the company using React.js and C# \n\n•	Communicated with 3 other web developers \n•	Each having their own roles such as backend (C#) and frontend (React.js) Development \n\nMain duties include: \n•	Data validation (frontend) \n•	Construction of the user-interface \n•	Displaying the data retrieved from the database on the webpage'}
];

const Education = () => {
  const images = []

  Images.forEach(image => {
    images.push(
      <div>
        <div className="idiv_experience">
          <img src={`${image.url}`} alt={`${image.alt}`}/>
          <div className="idiv_description">
            <h1>{`${image.alt}`}</h1>
            <h2>{`${image.role}`}</h2>
            <h3>{`${image.duration}`}</h3>
            <p className="display-linebreak">{`${image.description}`}</p>
          </div>        
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="experience">
      <h1 id="sectionNames">Experience</h1>
      <div>
        {images}
      </div>
    </div>
  )
};

export default Education;