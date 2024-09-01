import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Dropdown, Button } from 'react-bootstrap';

const SearchResults = () => {
  const { searchterm } = useParams();
  const [ item , setItem] = useState(searchterm);
  const [stockAvailable, setStockAvailable] = useState("Not Available");
  const [location, setLocation] = useState("");
  // const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/search?query=${searchterm}`);
        const data = await res.json(); 

        if (data.length > 0) {
          const product = data[0];
          setItem(product.name);
          setStockAvailable(product.availability);
          setLocation(product.location);
          // setCategories(product.categories || []);
          setReviews(product.reviews || []);
          setRelatedItems(product.relatedItems || []);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchterm]);
  const categories = ['Groceries', 'Electronics', 'Clothes']; 

  return (
    <Container fluid className="d-flex flex-column align-items-center my-4">
      <h2>Selected Item: {item}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Stock:</strong> {stockAvailable}</p>
      {!stockAvailable && (
        <p>Available in 4 days. <Button variant="primary">Order Now</Button></p>
      )}
      <Dropdown className="my-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map((category, index) => (
            <Dropdown.Item key={index}>{category}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h4>Reviews:</h4>
      {reviews.map((review, index) => (
        <p key={index}><strong>{review.name}:</strong> {review.comment}</p>
      ))}
      <h4>Related Products:</h4>
      <Row className="justify-content-center">
        {relatedItems.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
            <Card className="text-center">
            <Card.Img variant="top" src={product.image} className="related-product-img" />
            <Card.Title className="related-product-title">{product.name}</Card.Title>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
