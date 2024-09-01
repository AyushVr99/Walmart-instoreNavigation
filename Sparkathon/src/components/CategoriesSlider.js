import React from 'react';
import { Carousel } from 'react-bootstrap';

const CategoriesSlider = () => {
  const categories = ['Groceries', 'Home Appliances', 'Clothes', 'Toys', 'Video Games', 'Electronics', 'Eco-Friendly'];
  
  return (
    <Carousel>
      {categories.map((category, index) => (
        <Carousel.Item key={index}>
          <h3>{category}</h3>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CategoriesSlider;
