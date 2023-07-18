import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './portfolio';

const Routes = () => {
  return (
    <Router>
      <Header />
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
