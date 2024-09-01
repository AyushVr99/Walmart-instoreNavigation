import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (orderId) {
      navigate(`/order/${orderId}`);
    }
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h2>Order Lookup</h2>
      <Form onSubmit={handleSearch} className="w-50">
        <Form.Group controlId="orderId">
          <Form.Control
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default OrdersPage;
