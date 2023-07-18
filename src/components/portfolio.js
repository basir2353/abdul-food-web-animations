import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/portfolio.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    // Fetch portfolio item data from the API
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get('https://example.com/api/portfolio');
        setPortfolioData(response.data);
      } catch (error) {
        console.log('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <section className="portfolio">
      <h2>Contact Us</h2>
      <ul>
        {portfolioData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="social-media">
        <a href="https://www.instagram.com/mabdulbasitdogar/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/mabdulbasit.dogar.1" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/mabdulbasi1096?t=gA2Yx3B6pOJogf-F_kUh0g&s=09" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
      </div>
      <div className="contact-info">
        <p>Name: Abdul Basit</p>
        <p>Contact: 03303573335</p>
        <p>Email: mabdulbasitdogar@gmail.com</p>
      </div>
    </section>
  );
};

export default Portfolio;
