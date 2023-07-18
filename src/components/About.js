// About.jsx
import React from 'react';
import { aboutData } from '../data/aboutData';
import './style/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{aboutData.description}</p>
    </section>
  );
};

export default About;
