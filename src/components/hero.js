import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json'; // Adjusted import path

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Updated import reference
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default Hero;
