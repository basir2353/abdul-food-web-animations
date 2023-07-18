import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Home.css';
import foodData from '../data/foodData.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(foodData.foods);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Food Store</h1>
      <div className="image-container">
        {products.map((product, index) => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="animated-image"
            />
            <h2>{product.name}</h2>
            <p>{product.details}</p>
            <div className="price">
              <div className="price-inner">
                <h3>Price: ${product.price}</h3>
                <p>Discount: {product.discount}% off</p>
              </div>
              <button className="buy-now">Buy Now</button>
            </div>
            {(index + 1) % 3 === 0 && <div className="row-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
