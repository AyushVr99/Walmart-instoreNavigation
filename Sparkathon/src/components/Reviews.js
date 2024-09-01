import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
  return (
    <ListGroup>
      {reviews.slice(0, 2).map((review, index) => (
        <ListGroup.Item key={index}>
          <strong>{review.user}</strong>: {review.text} - {review.rating} stars
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Reviews;
