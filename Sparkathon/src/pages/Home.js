import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import groceriesImage from '../images/groceries.jpeg';
import clothesImage from '../images/clothes.jpeg';
import homeAppImage from '../images/appliances.jpeg';
import toysImage from '../images/toys.jpeg';
import videogamesImage from '../images/videoGames.jpeg';
import electronicsImages from '../images/electronics.jpeg';
import ecoImage from '../images/eco.jpeg';

const categories = [
  { name: 'Groceries', image: groceriesImage },
  { name: 'Home Appliances', image: homeAppImage },
  { name: 'Clothes', image: clothesImage },
  { name: 'Toys', image: toysImage },
  { name: 'Video Games', image: videogamesImage },
  { name: 'Electronics', image: electronicsImages },
  { name: 'Eco-Friendly', image: ecoImage },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
  };

  const handleClick = (category) => {
    const formattedVal = category.replace(/\s+/g, '').toLowerCase();
    navigate(`/search/category/${formattedVal}`);
  }

  return (
    <Container fluid>
      <h1 className="text-center my-4">In-Store Navigation</h1>
      <Form className="d-flex justify-content-center my-4">
        <Form.Control
          type="text"
          placeholder="Search for products"
          className="w-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="primary" className="ml-2" onClick={handleSearch}>Search</Button>
      </Form>
      <h2 className="text-center my-4">Shop by Category</h2>
      <Row className="d-flex justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="category-card" onClick={() => handleClick(category.name)}>
              <Card.Img variant="top" src={category.image} />
              <Card.Body >
                <Card.Title className="text-center" style={{ cursor:'pointer' }}>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
