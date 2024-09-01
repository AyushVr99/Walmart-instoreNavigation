import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Location: {product.location}<br />
          Stock: {product.stock ? 'In Stock' : 'Not currently available'}
        </Card.Text>
        {product.stock ? null : (
          <Button variant="warning">Order (Available in 4 days)</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
