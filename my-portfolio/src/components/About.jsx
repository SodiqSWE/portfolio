import '../App.css'
import headshot from '../images/SodiqHeadshot.jpeg';
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>Hey, I'm Sodiq!</h2>
      <div className='flex-container'>
        <img src={headshot} alt='Headshot' className='Headshot'/>
        <p>I'm a software engineer with experience in XYZ. I love building web applications and learning new technologies.</p>
      </div>
    </section>
  );
};

export default About;
