import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/services.css';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        );
        setServicesData(response.data.meals);
      } catch (error) {
        console.log('Error fetching services data:', error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-items-wrapper">
        {servicesData.map((item) => (
          <div key={item.idMeal} className="service-item">
            <h3>{item.strMeal}</h3>
            <div className="image-wrapper">
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <p>{item.strInstructions}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
