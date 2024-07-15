import '../App.css'
import headshot from '../images/SodiqHeadshot.jpeg';
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className='flex-container'>
        <img src={headshot} alt='Headshot' className='image-left'/>
        <p>
          <h2>Hey, my name is <span className='my-name'>Sodiq!</span></h2>
          I'm a software engineer with experience in both Front-End and Back-End scopes. I love designing and developing web and mobile applications, games, and learning new technologies!
          Other than coding, I love PC building, Soccer, I'm a huge anime nerd and car nerd!
        </p>
      </div>
    </section>
  );
};

export default About;
