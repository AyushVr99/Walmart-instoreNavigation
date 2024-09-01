import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductItem from './ProductItem';

const RelatedProducts = ({ products }) => {
  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default RelatedProducts;
