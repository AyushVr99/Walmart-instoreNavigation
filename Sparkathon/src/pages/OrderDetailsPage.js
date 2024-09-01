import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  
  // Sample data, replace with actual data fetching
  const orderLocation = "A1 Rack No.3"; 
  const currentOffers = [
    { id: 1, title: 'Discount on Electronics', description: 'Up to 20% off on all electronics!' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Buy 1 item and get another one free on selected categories!' },
    { id: 3, title: 'Seasonal Sale', description: 'Flat 15% off on seasonal items!' }
  ];

  return (
    <>
      <Container fluid className="d-flex flex-column align-items-center py-4">
        <Container className="my-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h2>Order ID: {orderId}</h2>
              <p><strong>Location:</strong> {orderLocation}</p>
              <p>Thank you for your order!</p>
              <p>Visit again soon!</p>
              <Button variant="primary" onClick={() => window.location.href = '/'}>Go to Home</Button>
            </Col>
          </Row>
        </Container>
        
        <Container className="mt-4">
          <h3 className="text-center">Current Offers</h3>
          <Row className="justify-content-center">
            {currentOffers.map((offer) => (
              <Col xs={12} sm={6} md={4} lg={3} className="mb-3" key={offer.id}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>{offer.title}</Card.Title>
                    <Card.Text>{offer.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default OrderDetailsPage;
